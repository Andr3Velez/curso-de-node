import path from "node:path";
import fs from "node:fs/promises";

let folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`));
    process.exit(1);
  }

  let editedFiles = files.map(async (file) => {
    let pathFile = path.join(folder, file);

    let statsFile;
    try {
      statsFile = await fs.stat(pathFile);
    } catch (error) {
      console.log("pathfile incorrect");
    }

    let isDirectory = statsFile.isDirectory() ? "d" : "f";
    let fileSize = statsFile.size.toString();

    return `${isDirectory} ${pathFile.padStart(20)} ${file.padEnd(
      10
    )} ${fileSize}`;
  });

  let doneFiles = await Promise.all(editedFiles);
  doneFiles.forEach((file) => console.log(file));
}

ls(folder);
