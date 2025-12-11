import { readFileSync } from "fs";
import { join } from "path";

const inputPath = join(__dirname, "DayOneInput.txt");
const content: string = readFileSync(inputPath, "utf-8");
const lines: string[] = content.split(/\r?\n/);

const line = lines[0];

const rangeStrings = line.split(",");

const cleanedRanges = rangeStrings.filter(r => r.trim() !== "");

const ranges = cleanedRanges.map(r => {
    const [startStr, endStr] = r.split("-");
    return {
        start: Number(startStr),
        end: Number(endStr),
    };
});

function isInvalid(id: number): boolean {
    const s = id.toString();

    if (s.length % 2 !== 0) {
       return false;
    }

    const half = s.length / 2;
    const first = s.slice (0, half);
    const second = s.slice(half);

    if (first === second) {
        return true
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