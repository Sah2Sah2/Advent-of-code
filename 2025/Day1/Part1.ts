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

  if (direction === "R") {
    position = (position + distance) % 100;
  } else if (direction === "L") {
    position = (position - distance + 100) % 100;
  }

  if (position === 0) {
    zeroCount++;
  }
}

console.log("Password:", zeroCount);
