const fs = require('fs');
const path = require('path');

const root = 'D:\\digixito-projects\\digixito (1)';
const dirs = fs.readdirSync(root, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

const data = {};

dirs.forEach(dir => {
  const indexHtml = path.join(root, dir, 'index.html');
  if (fs.existsSync(indexHtml)) {
    const content = fs.readFileSync(indexHtml, 'utf8');
    
    // Attempt to extract text around headings
    const getSection = (keyword) => {
      const regex = new RegExp(`<h[1-6][^>]*>[^<]*${keyword}[^<]*<\/h[1-6]>\\s*(?:<[^>]+>\\s*)*([^<]+)`, 'i');
      const match = content.match(regex);
      if (match && match[1] && match[1].trim().length > 5) {
        return match[1].trim().replace(/\s+/g, ' ');
      }
      return null;
    };

    const getDesc = () => {
      // Find the main description paragraph, usually large block of text
      // We can look for <p> tags with more than 100 characters.
      const match = content.match(/<p[^>]*>([\s\S]{100,}?)<\/p>/i);
      if (match) {
        return match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      }
      return null;
    };
    
    const getVideo = () => {
      const match = content.match(/<iframe[^>]+src="([^"]+)"/i);
      if (match) {
        return match[1];
      }
      return null;
    };

    data[dir] = {
      description: getDesc(),
      challenges: getSection('Challenge') || getSection('Problem'),
      strategy: getSection('Strateg') || getSection('Solution'),
      results: getSection('Result') || getSection('Outcome'),
      videoUrl: getVideo()
    };
  }
});

console.log(JSON.stringify(data, null, 2));
