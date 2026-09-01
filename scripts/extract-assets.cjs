/**
 * Kyndryl India Asset Extractor
 * 
 * Extracts all image and video URLs from the Kyndryl India homepage HTML,
 * then downloads them into public/kyndryl-assets/
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const BASE_URL = 'https://www.kyndryl.com';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'kyndryl-assets');

// Sub-directories
const DIRS = {
  images: path.join(OUTPUT_DIR, 'images'),
  videos: path.join(OUTPUT_DIR, 'videos'),
  icons: path.join(OUTPUT_DIR, 'icons'),
  logos: path.join(OUTPUT_DIR, 'logos'),
};

// Create directories
Object.values(DIRS).forEach(d => fs.mkdirSync(d, { recursive: true }));
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchPage(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(filepath)) {
      console.log(`  SKIP (exists): ${path.basename(filepath)}`);
      return resolve();
    }
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { 
      headers: { 'User-Agent': 'Mozilla/5.0' },
      timeout: 15000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) redirectUrl = BASE_URL + redirectUrl;
        return downloadFile(redirectUrl, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        console.log(`  FAIL (${res.statusCode}): ${url}`);
        return resolve();
      }
      const stream = fs.createWriteStream(filepath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        const size = fs.statSync(filepath).size;
        if (size < 100) {
          fs.unlinkSync(filepath);
          console.log(`  FAIL (too small): ${path.basename(filepath)}`);
        } else {
          console.log(`  OK (${(size/1024).toFixed(1)}KB): ${path.basename(filepath)}`);
        }
        resolve();
      });
      stream.on('error', (err) => {
        fs.unlinkSync(filepath);
        reject(err);
      });
    });
    req.on('error', (err) => {
      console.log(`  ERR: ${url} - ${err.message}`);
      resolve();
    });
    req.on('timeout', () => {
      req.destroy();
      console.log(`  TIMEOUT: ${url}`);
      resolve();
    });
  });
}

function sanitizeFilename(url) {
  try {
    const u = new URL(url);
    let name = u.pathname.split('/').filter(Boolean).pop() || 'unnamed';
    // Remove query params from filename
    name = name.split('?')[0];
    // Replace problematic chars
    name = name.replace(/[^a-zA-Z0-9._-]/g, '_');
    return name;
  } catch {
    return 'unnamed_' + Date.now();
  }
}

function categorizeAsset(url, filename) {
  const lower = (url + filename).toLowerCase();
  if (lower.includes('.mp4') || lower.includes('.webm') || lower.includes('.ogg') || lower.includes('video')) {
    return DIRS.videos;
  }
  if (lower.includes('.svg') || lower.includes('icon')) {
    return DIRS.icons;
  }
  if (lower.includes('logo') || lower.includes('brand') || lower.includes('partner')) {
    return DIRS.logos;
  }
  return DIRS.images;
}

async function main() {
  console.log('=== Kyndryl India Asset Extractor ===\n');
  console.log('Fetching homepage HTML...');
  
  const html = await fetchPage('https://www.kyndryl.com/in/en');
  console.log(`HTML length: ${html.length} chars\n`);

  // Extract all image URLs
  const imgPatterns = [
    /src="([^"]*\.(?:jpg|jpeg|png|gif|webp|svg|avif)[^"]*)"/gi,
    /srcset="([^"]*\.(?:jpg|jpeg|png|gif|webp|svg|avif)[^"]*)"/gi,
    /data-src="([^"]*\.(?:jpg|jpeg|png|gif|webp|svg|avif)[^"]*)"/gi,
    /data-lazy-src="([^"]*\.(?:jpg|jpeg|png|gif|webp|svg|avif)[^"]*)"/gi,
    /background-image:\s*url\(['"]?([^'")\s]+\.(?:jpg|jpeg|png|gif|webp|svg|avif)[^'")\s]*)['"]?\)/gi,
    /url\(['"]?([^'")\s]+\.(?:jpg|jpeg|png|gif|webp|svg|avif)[^'")\s]*)['"]?\)/gi,
    /content="([^"]*\.(?:jpg|jpeg|png|gif|webp|svg|avif)[^"]*)"/gi,
    /href="([^"]*\.(?:jpg|jpeg|png|gif|webp|svg|avif)[^"]*)"/gi,
  ];

  // Extract video URLs
  const videoPatterns = [
    /src="([^"]*\.(?:mp4|webm|ogg)[^"]*)"/gi,
    /data-src="([^"]*\.(?:mp4|webm|ogg)[^"]*)"/gi,
    /poster="([^"]*\.(jpg|jpeg|png|webp)[^"]*)"/gi,
  ];

  // Also extract from data attributes and JSON-LD
  const dataPatterns = [
    /"(?:image|thumbnail|poster|src|url|background)":\s*"([^"]*\.(?:jpg|jpeg|png|gif|webp|svg|avif|mp4|webm)[^"]*)"/gi,
    /data-cmp-src="([^"]+)"/gi,
    /data-asset-src="([^"]+)"/gi,
  ];

  const allUrls = new Set();

  const allPatterns = [...imgPatterns, ...videoPatterns, ...dataPatterns];
  for (const pattern of allPatterns) {
    let match;
    while ((match = pattern.exec(html)) !== null) {
      let url = match[1];
      // Skip data URIs and trivial
      if (url.startsWith('data:') || url.length < 5) continue;
      // Handle srcset (multiple URLs separated by commas)
      if (url.includes(',') && url.includes(' ')) {
        url.split(',').forEach(part => {
          const u = part.trim().split(/\s+/)[0];
          if (u && u.length > 5 && !u.startsWith('data:')) allUrls.add(u);
        });
      } else {
        allUrls.add(url);
      }
    }
  }

  // Normalize URLs
  const normalizedUrls = [];
  for (const url of allUrls) {
    let fullUrl = url;
    if (fullUrl.startsWith('//')) fullUrl = 'https:' + fullUrl;
    else if (fullUrl.startsWith('/')) fullUrl = BASE_URL + fullUrl;
    else if (!fullUrl.startsWith('http')) continue;
    
    // Skip external CDN tracking pixels, analytics, etc.
    if (fullUrl.includes('google') || fullUrl.includes('facebook') || 
        fullUrl.includes('analytics') || fullUrl.includes('tracking') ||
        fullUrl.includes('pixel') || fullUrl.includes('beacon') ||
        fullUrl.includes('doubleclick') || fullUrl.includes('adsense')) {
      continue;
    }
    
    normalizedUrls.push(fullUrl);
  }

  console.log(`Found ${normalizedUrls.length} asset URLs\n`);

  // Download in batches of 5
  const BATCH = 5;
  let downloaded = 0;
  let failed = 0;

  for (let i = 0; i < normalizedUrls.length; i += BATCH) {
    const batch = normalizedUrls.slice(i, i + BATCH);
    const promises = batch.map(async (url) => {
      const filename = sanitizeFilename(url);
      const dir = categorizeAsset(url, filename);
      const filepath = path.join(dir, filename);
      
      try {
        await downloadFile(url, filepath);
        downloaded++;
      } catch (err) {
        console.log(`  ERR: ${filename} - ${err.message}`);
        failed++;
      }
    });
    await Promise.all(promises);
  }

  // Write manifest
  const manifest = {
    extracted: new Date().toISOString(),
    source: 'https://www.kyndryl.com/in/en',
    totalFound: normalizedUrls.length,
    downloaded,
    failed,
    urls: normalizedUrls,
  };
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'manifest.json'), 
    JSON.stringify(manifest, null, 2)
  );

  console.log('\n=== Summary ===');
  console.log(`Total URLs found: ${normalizedUrls.length}`);
  console.log(`Downloaded: ${downloaded}`);
  console.log(`Failed: ${failed}`);
  console.log(`Output: public/kyndryl-assets/`);
  
  // List what we got
  for (const [name, dir] of Object.entries(DIRS)) {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      console.log(`  ${name}/: ${files.length} files`);
    }
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
