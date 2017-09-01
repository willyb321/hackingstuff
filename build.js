const pug = require('pug');
const fs = require('fs');

// Compile the template.
const compiledFunction = pug.compileFile('views/index.pug');

// Read tools listing.
const tools = JSON.parse(fs.readFileSync('./_data/tools.json', "utf8"));

// Write index.html
fs.writeFileSync('./dist/index.html', compiledFunction({tools: tools}));
