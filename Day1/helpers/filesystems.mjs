import { readFile, writeFileSync } from "fs";
import { promisify } from "util";
const readFilePromise = promisify(readFile);

async function readUsersFromFile(filename, cp) {
  return await readFilePromise(filename, "utf-8");
}

function writeUserIntoFile(filename, users) {
  writeFileSync(filename, users);
}

function printMessage() {
  console.log("welcome");
}

export { readUsersFromFile, writeUserIntoFile };
export default { printMessage };
