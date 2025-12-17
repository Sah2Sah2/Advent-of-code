import { readFileSync } from "fs";
import { join } from "path";

const inputPath = join(__dirname, "Input.txt");
const content: string = readFileSync(inputPath, "utf-8");

// 2D 
const grid: string[][] = content
  .split(/\r?\n/)
  .filter((line) => line.length > 0)
  .map((line) => line.split(""));

function countAdjacentPapers(
  grid: string[][],
  row: number,
  col: number
): number {
  let count = 0;
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;
    if (
      newRow >= 0 &&
      newRow < grid.length &&
      newCol >= 0 &&
      newCol < grid[0].length &&
      grid[newRow][newCol] === "@"
    ) {
      count++;
    }
  }
  return count;
}

let totalRemoved = 0;

while (true) {
  const toRemove: [number, number][] = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "@" && countAdjacentPapers(grid, i, j) < 4) {
        toRemove.push([i, j]);
      }
    }
  }

  if (toRemove.length === 0) {
    break;
  }

  for (const [i, j] of toRemove) {
    grid[i][j] = ".";
  }

  totalRemoved += toRemove.length;
}

console.log(totalRemoved);
