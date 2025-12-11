import { readFileSync } from "fs";
import { join } from "path";

const inputPath = join(__dirname, "DayOneInput.txt");
const content: string = readFileSync(inputPath, "utf-8");
const lines: string[] = content.split(/\r?\n/);

let position = 50;
let zeroCount = 0;

for (const line of lines) {
  const rotation = line.trim();
  if (!rotation) continue;

  const direction = rotation[0];
  const distance = Number(rotation.slice(1));

  for (let step = 0; step < distance; step++) {
    if (direction === "R") {
      position = (position + 1) % 100;
    } else {
      position = (position - 1 + 100) % 100;
    }
    if (position === 0) zeroCount++;
  }
}

console.log("Password:", zeroCount);