const fs = require("fs");

const file = fs.readFileSync("txt.txt", "utf-8");

console.log(file);
