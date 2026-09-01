const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'public', 'kyndryl-assets');
const DIRS = {
  images: path.join(BASE, 'images'),
  videos: path.join(BASE, 'videos'),
  icons: path.join(BASE, 'icons'),
  logos: path.join(BASE, 'logos'),
  recognition: path.join(BASE, 'recognition'),
};
Object.values(DIRS).forEach(d => fs.mkdirSync(d, { recursive: true }));

const ASSETS = [
  // Logos
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/images/logo-kyndryl-red.svg', dir: 'logos', name: 'kyndryl-logo-red.svg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/images/svg-icon-sprite.svg', dir: 'icons', name: 'svg-icon-sprite.svg' },
  // Alliance partner logos (from initial extraction)
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/logos/Microsoft-logo.svg', dir: 'logos', name: 'microsoft.svg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/logos/Google-Cloud-logo.svg', dir: 'logos', name: 'google-cloud.svg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/logos/AWS-color-logo.svg', dir: 'logos', name: 'aws.svg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/logos/Cisco-logo.svg', dir: 'logos', name: 'cisco.svg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/logos/SAP-logo.svg', dir: 'logos', name: 'sap.svg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/logos/databricks-4x3.svg', dir: 'logos', name: 'databricks.svg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/logos/Dell-Technologies-logo.svg', dir: 'logos', name: 'dell.svg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/logos/Paloalto-logo.svg', dir: 'logos', name: 'palo-alto.svg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/logos/Oracle-logo.svg', dir: 'logos', name: 'oracle.svg' },
  // Social icons
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/images/social/linkedin-dark.svg', dir: 'icons', name: 'linkedin.svg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/images/social/twitter-dark.svg', dir: 'icons', name: 'x-twitter.svg' },
  // Footer logo
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/images/Kyndryl_Logo_footer', dir: 'logos', name: 'kyndryl-logo-footer.svg' },
  // Hero images - try actual DAM paths
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/in/en/hero/continuous-modernization.jpg', dir: 'images', name: 'hero-continuous-modernization.jpg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/in/en/hero/ai-readiness.jpg', dir: 'images', name: 'hero-ai-readiness.jpg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/in/en/hero/people-readiness.jpg', dir: 'images', name: 'hero-people-readiness.jpg' },
  // Try common image paths from the site's DAM
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/in/en/featured/india-manufacturing-boom.jpg', dir: 'images', name: 'india-manufacturing-boom.jpg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/in/en/featured/suryoday-bank.jpg', dir: 'images', name: 'suryoday-bank.jpg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/in/en/featured/etgccworld-surge.jpg', dir: 'images', name: 'etgccworld-surge.jpg' },
  // Leadership
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/people/lingraju-sawkar.jpg', dir: 'images', name: 'lingraju-sawkar.jpg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/people/hitesh-shah.jpg', dir: 'images', name: 'hitesh-shah.jpg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/people/hussain-zaidi.jpg', dir: 'images', name: 'hussain-zaidi.jpg' },
  // Customer stories
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/customer-stories/creditaccess-grameen.jpg', dir: 'images', name: 'creditaccess-grameen.jpg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/customer-stories/canara-bank.jpg', dir: 'images', name: 'canara-bank.jpg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/customer-stories/dilip-buildcon.jpg', dir: 'images', name: 'dilip-buildcon.jpg' },
  // Recognition badges
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/recognition/gartner-leader.png', dir: 'recognition', name: 'gartner-leader.png' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/recognition/isg-leader.svg', dir: 'recognition', name: 'isg-leader.svg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/recognition/idc-leader.png', dir: 'recognition', name: 'idc-leader.png' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/recognition/wsj-most-loved.svg', dir: 'recognition', name: 'wsj-most-loved.svg' },
  // Insights
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/insights/rethinking-business-model-ai.jpg', dir: 'images', name: 'rethinking-business-ai.jpg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/insights/industrial-age-ai.jpg', dir: 'images', name: 'industrial-age-ai.jpg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/insights/sustainability-gap.jpg', dir: 'images', name: 'sustainability-gap.jpg' },
  // Services
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/services/kyndryl-consult.jpg', dir: 'images', name: 'kyndryl-consult.jpg' },
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/services/kyndryl-bridge.jpg', dir: 'images', name: 'kyndryl-bridge.jpg' },
  // Thumbnail from initial extraction
  { url: 'https://www.kyndryl.com/content/dam/kyndrylprogram/cs-shared-images/in/en.thumb.800.480.1787769334564.png', dir: 'images', name: 'homepage-thumb.png' },
];

function download(url, filepath) {
  return new Promise((resolve) => {
    if (fs.existsSync(filepath)) {
      console.log(`  SKIP: ${path.basename(filepath)}`);
      return resolve();
    }
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 12000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) loc = 'https://www.kyndryl.com' + loc;
        return download(loc, filepath).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`  ${res.statusCode}: ${path.basename(filepath)} (${url})`);
        return resolve();
      }
      const ws = fs.createWriteStream(filepath);
      res.pipe(ws);
      ws.on('finish', () => {
        ws.close();
        const sz = fs.statSync(filepath).size;
        if (sz < 100) { fs.unlinkSync(filepath); console.log(`  TINY: ${path.basename(filepath)}`); }
        else console.log(`  OK (${(sz/1024).toFixed(1)}KB): ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (e) => { console.log(`  ERR: ${path.basename(filepath)} - ${e.message}`); resolve(); })
      .on('timeout', function() { this.destroy(); console.log(`  TIMEOUT: ${path.basename(filepath)}`); resolve(); });
  });
}

async function main() {
  console.log(`=== Downloading ${ASSETS.length} Kyndryl assets ===\n`);
  for (let i = 0; i < ASSETS.length; i += 5) {
    await Promise.all(ASSETS.slice(i, i + 5).map(a =>
      download(a.url, path.join(DIRS[a.dir], a.name))
    ));
  }
  console.log('\n=== Done ===');
  for (const [k, d] of Object.entries(DIRS)) {
    const files = fs.existsSync(d) ? fs.readdirSync(d) : [];
    console.log(`  ${k}/: ${files.length} files`);
    files.forEach(f => console.log(`    - ${f} (${(fs.statSync(path.join(d, f)).size / 1024).toFixed(1)}KB)`));
  }
}
main();
