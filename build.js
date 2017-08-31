const pug = require('pug');
const fs = require('fs');
// Compile the source code
const compiledFunction = pug.compileFile('index.pug');

fs.writeFileSync('index.html', compiledFunction());
