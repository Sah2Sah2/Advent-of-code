import { readFileSync } from "fs";
import { join } from "path";

const inputPath = join(__dirname, "Input.txt");
const content: string = readFileSync(inputPath, "utf-8");
const lines: string[] = content.split(/\r?\n/);

const banks = lines.filter(line => line.trim().length > 0);

function maxFromBank(bank: string): number {
    
    let max = 0;

    for (let i = 0; i < bank.length; i++) {
        const first = Number(bank[i]);

        for (let j = i + 1; j < bank.length; j++) {
            const second = Number(bank[j]);
            const value = first * 10 + second; 

            if (value > max) {
                max = value;
            }
        }
    }
    return max;
}

let total = 0; 

for (const bank of banks) {
    const maxValue = maxFromBank(bank);
    total += maxValue;
}

console.log(total);