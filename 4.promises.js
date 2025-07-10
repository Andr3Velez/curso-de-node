const fs = require("fs/promises");

fs.readFile("txt.txt", "utf-8").then((text) => {
  console.log(text);
});
