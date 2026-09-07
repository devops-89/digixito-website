const fs = require('fs');
const path = require('path');

const constantPath = path.join(__dirname, 'utils/constant.ts');
let constantContent = fs.readFileSync(constantPath, 'utf8');

const imagesMap = {
  'Max Bupa Health Insurance': ['/images/projects/old-projects/max-bupa/max-bupa.jpg'],
  'Microsoft': [
    '/images/projects/old-projects/microsoft/microsoft1.jpg',
    '/images/projects/old-projects/microsoft/microsoft2.jpg'
  ],
  'HP': [
    '/images/projects/old-projects/hp/hp-1.jpg',
    '/images/projects/old-projects/hp/hp-2.jpg'
  ],
  'G-Cube': [
    '/images/projects/old-projects/gcube/g-cube1.jpg',
    '/images/projects/old-projects/gcube/g-cube2.jpg'
  ],
  'RSPL': [
    '/images/projects/old-projects/rspl/rspl1.jpg',
    '/images/projects/old-projects/rspl/rspl2.jpg',
    '/images/projects/old-projects/rspl/rspl3.jpg',
    '/images/projects/old-projects/rspl/rspl4.jpg',
    '/images/projects/old-projects/rspl/rspl5.jpg',
    '/images/projects/old-projects/rspl/rspl6.jpg'
  ],
  'Ornet': [
    '/images/projects/old-projects/ornet/ornet1.jpg',
    '/images/projects/old-projects/ornet/ornet2.jpg',
    '/images/projects/old-projects/ornet/ornet3.jpg',
    '/images/projects/old-projects/ornet/ornet4.jpg',
    '/images/projects/old-projects/ornet/ornet5.jpg',
    '/images/projects/old-projects/ornet/ornet6.jpg'
  ],
  'Bella Casa': [
    '/images/projects/old-projects/bella-casa/bella-casa1.jpg',
    '/images/projects/old-projects/bella-casa/bella-casa2.jpg',
    '/images/projects/old-projects/bella-casa/bella-casa3.jpg',
    '/images/projects/old-projects/bella-casa/bella-casa4.jpg',
    '/images/projects/old-projects/bella-casa/bella-casa5.jpg'
  ],
  'Bhonko': [
    '/images/projects/old-projects/bhonko/bhonko1.jpg',
    '/images/projects/old-projects/bhonko/bhonko2.jpg',
    '/images/projects/old-projects/bhonko/bhonko3.jpg',
    '/images/projects/old-projects/bhonko/bhonko4.jpg',
    '/images/projects/old-projects/bhonko/bhonko5.jpg',
    '/images/projects/old-projects/bhonko/bhonko6.jpg'
  ],
  'KhAI Edu': [
    '/images/projects/old-projects/xai/kharkiv.jpg',
    '/images/projects/old-projects/xai/kharkiv-2.jpg'
  ]
};

for (const [title, imgs] of Object.entries(imagesMap)) {
  const searchStr = `title: "${title}",`;
  if (constantContent.includes(searchStr)) {
    // Only inject if images array is not already there
    const imagesBlock = `\n      images: [\n${imgs.map(url => `        "${url}"`).join(',\n')}\n      ],`;
    if (!constantContent.includes(imagesBlock)) {
      constantContent = constantContent.replace(searchStr, searchStr + imagesBlock);
      console.log(`Successfully injected images for ${title}`);
    }
  } else {
    console.log(`Warning: Could not find title "${title}"`);
  }
}

fs.writeFileSync(constantPath, constantContent, 'utf8');
console.log('Update complete.');
