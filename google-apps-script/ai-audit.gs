/**
 * McCarthy — AI Audit intake.
 *
 * Receives a submission from the website's /api/ai-audit route, appends it to
 * the AI Audit sheet, and sends ONE notification to the administrator.
 *
 * The person who submitted the form is never emailed. Their address appears
 * only inside the notification body, never as a recipient.
 *
 * Deployment instructions are in the project README ("AI Audit submissions").
 */

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION — change these three values.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * The spreadsheet's id: the long string in its URL, between /d/ and /edit.
 * https://docs.google.com/spreadsheets/d/THIS_PART_HERE/edit
 */
const SPREADSHEET_ID = '19xkUNBQ6KgSYn2QM9YJpT10QOVS9VWO3RoYjUXNisKE';

/** The tab the rows are appended to. Must match the tab name exactly. */
const SHEET_NAME = 'AI Audit';

/**
 * Who receives the notification. These are the ONLY addresses ever emailed.
 * Each submission sends one email addressed to all of them. Add or remove
 * addresses here; nothing else needs changing.
 */
const ADMIN_EMAILS = ['growspark@gmail.com', 'admin@growsparkconsulting.com'];

/**
 * Bumped whenever this file changes. The health check reports it, so the site
 * (and you) can confirm which version a deployment is actually running.
 */
const VERSION = '2026-09-30.3';

// ─────────────────────────────────────────────────────────────────────────────
// Below this line nothing needs changing.
// ─────────────────────────────────────────────────────────────────────────────

/** Column order. The sheet's header row must match this exactly. */
const COLUMNS = [
  'Timestamp',
  'Name',
  'Email',
  'Company',
  'Job Title',
  'Website',
  'Industry',
  'Company Size',
  'Goals',
  'Challenge',
  'Preferred Contact',
  'Additional Information',
];

/** Field bounds, kept in step with the website's own validation. */
const LIMITS = {
  nameMin: 2,
  nameMax: 100,
  companyMin: 2,
  companyMax: 150,
  challengeMin: 10,
  challengeMax: 3000,
  additionalMax: 3000,
  emailMax: 254,
};

/**
 * Entry point for the web app.
 *
 * Returns JSON in every case. Internal error detail is logged (visible under
 * Executions in the editor) and never returned to the caller.
 *
 * Saving and notifying are separate steps with separate outcomes:
 *
 * - If the row cannot be saved, the lead is lost, so the reply is a failure
 *   and the website asks the visitor to try again.
 * - If the row is saved but the email fails, the lead is safe. Reporting that
 *   as a failure would make the visitor resubmit and create a duplicate row,
 *   so the reply is a success with `notified: false`, and the website logs it.
 */
function doPost(e) {
  var data;

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse(false, 'Unable to process the request');
    }

    data = JSON.parse(e.postData.contents);
  } catch (error) {
    console.error('doPost: unreadable body: ' + error);
    return jsonResponse(false, 'Unable to process the request');
  }

  var errors = validate(data);

  if (errors.length > 0) {
    console.error('doPost: validation failed: ' + errors.join('; '));
    return jsonResponse(false, 'Unable to process the request');
  }

  // Server-side timestamp. A browser-supplied time is not trusted.
  var now = new Date();
  var timezone = Session.getScriptTimeZone();

  try {
    appendRow(data, now, timezone);
  } catch (error) {
    console.error('doPost: could not save the row: ' + error);
    return jsonResponse(false, 'Unable to process the request');
  }

  var notified = true;

  try {
    notifyAdmin(data, now, timezone);
  } catch (error) {
    notified = false;
    console.error('doPost: row saved, but the admin email failed: ' + error);
  }

  return jsonResponse(true, 'AI Audit request received successfully', { notified: notified });
}

/**
 * Health check. Opening the deployment URL in a browser shows this without
 * writing a row. It reports only what is needed to confirm the deployment is
 * the right one and able to send — never the recipient addresses themselves.
 */
function doGet() {
  var quota = null;

  try {
    quota = MailApp.getRemainingDailyQuota();
  } catch (error) {
    // Most often: the new version has not been authorized to send email yet.
    console.error('doGet: email not authorized: ' + error);
  }

  return jsonResponse(true, 'AI Audit endpoint is live', {
    version: VERSION,
    recipients: ADMIN_EMAILS.length,
    emailAuthorized: quota !== null,
    emailQuotaRemaining: quota,
  });
}

/**
 * Run this once from the editor (choose it in the toolbar, then Run) after
 * pasting a new version. It triggers Google's permission prompt, then sends a
 * test email to every ADMIN_EMAILS address, so you can confirm delivery
 * without submitting the form.
 */
function sendTestEmail() {
  var recipients = ADMIN_EMAILS.join(',');

  MailApp.sendEmail(recipients, 'McCarthy AI Audit — test email', [
    'This is a test from the McCarthy AI Audit Apps Script.',
    '',
    'If you can read this, AI Audit notifications will reach this inbox.',
    '',
    'Script version: ' + VERSION,
  ].join('\n'), { name: 'McCarthy Website' });

  console.log(
    'Test email sent to ' + recipients + '. Emails left today: ' + MailApp.getRemainingDailyQuota(),
  );
}

/** Builds the JSON reply, with optional extra fields. */
function jsonResponse(success, message, extra) {
  var payload = { success: success, message: message };

  if (extra) {
    for (var key in extra) {
      if (Object.prototype.hasOwnProperty.call(extra, key)) {
        payload[key] = extra[key];
      }
    }
  }

  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

/** Trims any value into a string. */
function text(value) {
  return value === null || value === undefined ? '' : String(value).trim();
}

/**
 * Third and final layer of validation, after the browser and the Next.js API.
 * The web app is publicly reachable, so it re-checks everything itself.
 */
function validate(data) {
  var errors = [];
  var name = text(data.name);
  var email = text(data.email);
  var company = text(data.company);
  var challenge = text(data.challenge);
  var additional = text(data.additionalInformation);

  if (name.length < LIMITS.nameMin || name.length > LIMITS.nameMax) {
    errors.push('name');
  }

  if (email.length === 0 || email.length > LIMITS.emailMax || !isEmail(email)) {
    errors.push('email');
  }

  if (company.length < LIMITS.companyMin || company.length > LIMITS.companyMax) {
    errors.push('company');
  }

  if (challenge.length < LIMITS.challengeMin || challenge.length > LIMITS.challengeMax) {
    errors.push('challenge');
  }

  if (additional.length > LIMITS.additionalMax) {
    errors.push('additionalInformation');
  }

  return errors;
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/** Normalises goals, which arrive as an array. */
function goalsToText(goals) {
  if (Object.prototype.toString.call(goals) === '[object Array]') {
    return goals.map(text).filter(String).join(', ');
  }

  return text(goals);
}

/** Appends the submission, creating the tab and header row if they are missing. */
function appendRow(data, now, timezone) {
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS);
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    Utilities.formatDate(now, timezone, 'dd MMM yyyy HH:mm'),
    text(data.name),
    text(data.email),
    text(data.company),
    text(data.jobTitle),
    text(data.website),
    text(data.industry),
    text(data.companySize),
    goalsToText(data.goals),
    text(data.challenge),
    text(data.preferredContact),
    text(data.additionalInformation),
  ]);
}

/**
 * Sends exactly one email, addressed to every entry in ADMIN_EMAILS.
 *
 * The submitter's address is used only as the reply-to, so hitting Reply in
 * Gmail answers them directly — it is never a recipient.
 */
function notifyAdmin(data, now, timezone) {
  var company = text(data.company);
  var submitted = Utilities.formatDate(now, timezone, 'dd MMMM yyyy, h:mm a');
  var goals = goalsToText(data.goals);

  var lines = [
    'NEW AI AUDIT REQUEST',
    '',
    'A new AI Audit request has been submitted.',
    '',
    '--------------------------------',
    '',
    'CONTACT DETAILS',
    '',
    'Name:',
    text(data.name),
    '',
    'Email:',
    text(data.email),
    '',
    'Company:',
    company,
    '',
    'Job Title:',
    text(data.jobTitle) || '—',
    '',
    'Website:',
    text(data.website) || '—',
    '',
    '--------------------------------',
    '',
    'BUSINESS DETAILS',
    '',
    'Industry:',
    text(data.industry) || '—',
    '',
    'Company Size:',
    text(data.companySize) || '—',
    '',
    'Goals:',
    goals ? goals.split(', ').map(bullet).join('\n') : '—',
    '',
    '--------------------------------',
    '',
    'CHALLENGE',
    '',
    text(data.challenge),
    '',
    '--------------------------------',
    '',
    'PREFERRED CONTACT',
    '',
    text(data.preferredContact) || '—',
    '',
    '--------------------------------',
    '',
    'ADDITIONAL INFORMATION',
    '',
    text(data.additionalInformation) || '—',
    '',
    '--------------------------------',
    '',
    'Submitted:',
    submitted,
  ];

  MailApp.sendEmail(ADMIN_EMAILS.join(','), 'New AI Audit Request — ' + company, lines.join('\n'), {
    name: 'McCarthy Website',
    replyTo: text(data.email),
    htmlBody: buildHtml(data, goals, submitted),
  });
}

function bullet(value) {
  return '• ' + value;
}

/** Escapes submitted text so it cannot inject markup into the email. */
function escapeHtml(value) {
  return text(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function htmlRow(label, value) {
  return (
    '<tr>' +
    '<td style="padding:6px 18px 6px 0;color:#6d6d6d;vertical-align:top;white-space:nowrap">' +
    escapeHtml(label) +
    '</td>' +
    '<td style="padding:6px 0;color:#3d3c3c">' +
    (escapeHtml(value) || '&mdash;') +
    '</td>' +
    '</tr>'
  );
}

function htmlSection(title, inner) {
  return (
    '<h2 style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6d6d6d;' +
    'margin:28px 0 10px;border-top:1px solid #e3e2df;padding-top:18px">' +
    title +
    '</h2>' +
    inner
  );
}

function buildHtml(data, goals, submitted) {
  var goalsHtml = goals
    ? '<ul style="margin:6px 0 0;padding-left:18px;color:#3d3c3c">' +
      goals
        .split(', ')
        .map(function (goal) {
          return '<li style="margin:2px 0">' + escapeHtml(goal) + '</li>';
        })
        .join('') +
      '</ul>'
    : '<p style="margin:6px 0;color:#3d3c3c">&mdash;</p>';

  return (
    '<div style="font-family:Roboto,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.55;' +
    'color:#3d3c3c;max-width:640px">' +
    '<p style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#fb512f;' +
    'margin:0 0 6px">New AI Audit Request</p>' +
    '<h1 style="font-size:22px;font-weight:400;margin:0 0 4px">' +
    escapeHtml(data.company) +
    '</h1>' +
    '<p style="margin:0;color:#6d6d6d">A new AI Audit request has been submitted.</p>' +
    htmlSection(
      'Contact details',
      '<table style="border-collapse:collapse">' +
        htmlRow('Name', data.name) +
        htmlRow('Email', data.email) +
        htmlRow('Company', data.company) +
        htmlRow('Job Title', data.jobTitle) +
        htmlRow('Website', data.website) +
        '</table>',
    ) +
    htmlSection(
      'Business details',
      '<table style="border-collapse:collapse">' +
        htmlRow('Industry', data.industry) +
        htmlRow('Company Size', data.companySize) +
        '</table>' +
        '<p style="margin:14px 0 0;color:#6d6d6d">Goals</p>' +
        goalsHtml,
    ) +
    htmlSection(
      'Challenge',
      '<p style="margin:6px 0;white-space:pre-wrap">' + escapeHtml(data.challenge) + '</p>',
    ) +
    htmlSection(
      'Preferred contact',
      '<p style="margin:6px 0">' + (escapeHtml(data.preferredContact) || '&mdash;') + '</p>',
    ) +
    htmlSection(
      'Additional information',
      '<p style="margin:6px 0;white-space:pre-wrap">' +
        (escapeHtml(data.additionalInformation) || '&mdash;') +
        '</p>',
    ) +
    '<p style="margin:28px 0 0;border-top:1px solid #e3e2df;padding-top:16px;color:#6d6d6d;' +
    'font-size:13px">Submitted: ' +
    escapeHtml(submitted) +
    '</p>' +
    '</div>'
  );
}
