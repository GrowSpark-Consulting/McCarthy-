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

const URLS = [
  "https://www.kyndryl.com/content/dam/kyndryl/brands/kyndryl/logos/kyndryl-logo-red.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/brands/kyndryl/logos/kyndryl-logo-white.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/favicon/favicon.ico",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/favicon/apple-touch-icon.png",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/hero/continuous-modernization-hero.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/hero/ai-readiness-workforce.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/hero/people-readiness-progress.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/videos/hero/continuous-modernization-anthem.mp4",
  "https://www.kyndryl.com/content/dam/kyndryl/en/videos/hero/continuous-modernization-poster.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/announcements/india-manufacturing-boom.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/announcements/suryoday-small-finance-bank.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/announcements/etgccworld-surge-2026.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/who-we-are/alpitour-world-thumb.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/videos/who-we-are/alpitour-case-study.mp4",
  "https://www.kyndryl.com/content/dam/kyndryl/en/videos/who-we-are/alpitour-case-study-poster.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/recognition/isg-leader-badge-2026.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/recognition/gartner-magic-quadrant-leader.png",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/recognition/idc-marketscape-leader.png",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/recognition/wsj-top-100-loved-workplaces.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/case-studies/creditaccess-grameen.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/case-studies/canara-bank.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/case-studies/dilip-buildcon.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/services/kyndryl-consult.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/services/technology-services.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/services/kyndryl-bridge-platform.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/services/alliances.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/insights/rethinking-business-model-ai.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/insights/historical-blueprint-ai-industrial.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/insights/closing-sustainability-gap.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/leadership/lingraju-sawkar.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/leadership/hitesh-shah.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/en/images/leadership/hussain-zaidi.jpg",
  "https://www.kyndryl.com/content/dam/kyndryl/brands/alliances/microsoft-logo.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/brands/alliances/google-cloud-logo.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/brands/alliances/aws-logo.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/brands/alliances/cisco-logo.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/brands/alliances/sap-logo.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/brands/alliances/databricks-logo.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/brands/alliances/dell-logo.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/brands/alliances/palo-alto-logo.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/brands/alliances/oracle-logo.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/icons/search-icon.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/icons/bookmark-icon.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/icons/arrow-right.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/icons/chevron-down.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/icons/linkedin-icon.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/icons/x-twitter-icon.svg",
  "https://www.kyndryl.com/content/dam/kyndryl/icons/play-button.svg"
];

function categorize(url, filename) {
  const lower = url.toLowerCase();
  if (lower.includes('.mp4') || lower.includes('.webm')) return DIRS.videos;
  if (lower.includes('/icons/')) return DIRS.icons;
  if (lower.includes('/brands/') || lower.includes('logo')) return DIRS.logos;
  if (lower.includes('/recognition/')) return DIRS.recognition;
  return DIRS.images;
}

function download(url) {
  return new Promise((resolve) => {
    const filename = url.split('/').pop().split('?')[0];
    const dir = categorize(url, filename);
    const filepath = path.join(dir, filename);
    
    if (fs.existsSync(filepath)) {
      console.log(`  SKIP (exists): ${filename}`);
      return resolve();
    }
    
    const req = https.get(url, { 
      headers: { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }, 
      timeout: 30000 
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) loc = 'https://www.kyndryl.com' + loc;
        return download(loc).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`  FAIL (${res.statusCode}): ${filename}`);
        return resolve();
      }
      const ws = fs.createWriteStream(filepath);
      res.pipe(ws);
      ws.on('finish', () => {
        ws.close();
        const sz = fs.statSync(filepath).size;
        if (sz < 100) { 
          fs.unlinkSync(filepath); 
          console.log(`  FAIL (too small): ${filename}`); 
        } else {
          console.log(`  OK (${(sz/1024).toFixed(1)}KB): ${filename}`);
        }
        resolve();
      });
    });
    
    req.on('error', (e) => { 
      console.log(`  ERR: ${filename} - ${e.message}`); 
      resolve(); 
    });
    req.on('timeout', () => { 
      req.destroy(); 
      console.log(`  TIMEOUT: ${filename}`); 
      resolve(); 
    });
  });
}

async function main() {
  console.log(`=== Downloading ${URLS.length} Kyndryl assets ===\n`);
  for (let i = 0; i < URLS.length; i += 3) {
    const batch = URLS.slice(i, i + 3);
    await Promise.all(batch.map(download));
    // Sleep a bit to avoid rate limits
    await new Promise(r => setTimeout(r, 1000));
  }
  
  console.log('\n=== Done ===');
  for (const [k, d] of Object.entries(DIRS)) {
    const files = fs.existsSync(d) ? fs.readdirSync(d) : [];
    console.log(`  ${k}/: ${files.length} files`);
  }
}
main();
