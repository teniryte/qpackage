'use strict';

const fs = require('fs');
const path = require('path');

require('colors');

function createQPackageConfig() {
  const sourceFilename = path.resolve(__dirname, '../files/qpackage.yaml'),
    destFilename = path.resolve(process.env.HOME, '.qpackage.yaml');
  if (fs.existsSync(destFilename)) return;
  fs.writeFileSync(destFilename, fs.readFileSync(sourceFilename));
  console.log(`

  ${'QPACKAGE INSTALL'.green}
    ${`File «${destFilename}» created.`.grey}

  `);
}

createQPackageConfig();
