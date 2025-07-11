// const path = require("node:path");
const fs = require("node:fs/promises");

// const res = path.dirname(".");

const files = fs.readdir(".").then((response) => {
  console.log(response);
});
console.log(files);
