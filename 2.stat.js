const fs = require("node:fs");

const stat = fs.statSync("txt.txt");

console.log(stat.isDirectory(), stat.isFile(), stat.isSymbolicLink());
