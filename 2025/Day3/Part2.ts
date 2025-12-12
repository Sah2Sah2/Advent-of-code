import { readFileSync } from "fs";
import { join } from "path";

const inputPath = join(__dirname, "Input.txt");
const content: string = readFileSync(inputPath, "utf-8");
const lines: string[] = content.split(/\r?\n/);

const banks = lines.filter((line) => line.trim().length > 0);

function maxFromBank(bank: string, k: number): string {
    
  const stack: string[] = [];
  let toRemove = bank.length - k;

  for (const digit of bank) {
    while (
      stack.length > 0 &&
      toRemove > 0 &&
      stack[stack.length - 1] < digit
    ) {
      stack.pop();
      toRemove--;
    }
    stack.push(digit);
  }
  return stack.slice(0, k).join("");
}

const k = 12;
let total = 0n;

for (const bank of banks) {
  const best = maxFromBank(bank, k);
  total += BigInt(best);
}

console.log(total.toString());
