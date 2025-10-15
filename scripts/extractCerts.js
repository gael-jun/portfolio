const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function main() {
  try {
    const pdfPath = process.argv[2] || path.resolve(__dirname, '..', 'src', 'certifications.pdf');
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    const text = data.text || '';

    // split into lines and clean
    const lines = text
      .split(/\r?\n/) 
      .map(l => l.trim())
      .filter(Boolean);

    // extract all URLs
    const urlRegex = /(https?:\/\/[^\s)]+)|www\.[^\s)]+/gi;
    const urlsSet = new Set();
    let m;
    while ((m = urlRegex.exec(text)) !== null) {
      urlsSet.add(m[0]);
    }
    const urls = Array.from(urlsSet);

    // naive guess of certificate names: lines that look like titles (longer than 3 chars, not all lowercase)
    const candidateNames = lines.filter(l => l.length > 3 && /[A-Za-z]/.test(l) && (/[A-Z]/.test(l) || /\d/.test(l)));

    console.log(JSON.stringify({ lines, urls, candidateNames }, null, 2));
  } catch (err) {
    console.error('ERROR:', err.message);
    process.exit(1);
  }
}

main();
