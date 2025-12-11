import { readFileSync } from "fs";
import { join } from "path";

const inputPath = join(__dirname, "Input.txt");
const content: string = readFileSync(inputPath, "utf-8");
const lines: string[] = content.split(/\r?\n/);

const line = lines[0];

const rangeStrings = line.split(",");

const cleanedRanges = rangeStrings.filter((r) => r.trim() !== "");

const ranges = cleanedRanges.map((r) => {
  const [startStr, endStr] = r.split("-");
  return {
    start: Number(startStr),
    end: Number(endStr),
  };
});

function isInvalid(id: number): boolean {
  const s = id.toString();
  const len = s.length;

  for (let groupSize = 1; groupSize <= Math.floor(len / 2); groupSize++) {
    if (len % groupSize !== 0) continue;

    const group = s.slice(0, groupSize);
    const repeats = len / groupSize;

    if (group.repeat(repeats) === s) {
      return true;
    }
  }

  return false;
}

let total = 0;
for (const range of ranges) {
  for (let id = range.start; id <= range.end; id++) {
    if (isInvalid(id)) {
      total += id;
    }
  }
}

console.log(total);
