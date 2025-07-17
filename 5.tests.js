const fs = require("node:fs/promises");

let folder = process.argv[2] ?? ".";
console.log(folder);
async function ls(folder) {
  try {
    console.log(folder);
    let show = await fs.readdir(folder);
    console.log(show);
  } catch (error) {
    console.log("No se encontró el directorio");
    process.exit(1);
  }
}
ls(folder);
