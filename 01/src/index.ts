import fs from 'fs';

function countIncreases(lines: number[]): number {
  return lines.filter((elm, index, arr) => {
    const prev = arr[index - 1];
    return prev !== undefined && elm > prev;
  }).length;
}

async function main() {
  const { promises } = fs;
  const file = await promises.readFile('input.txt');
  const lines = file.toString().split('\n').map(str => Number(str));

  const lineIncreases = countIncreases(lines);
  console.log("part1:", lineIncreases);

  const windows = lines.slice(2).map((elm, si) => {
    return lines[si] + lines[si + 1] + lines[si + 2];
  });

  const windowIncreases = countIncreases(windows);
  console.log("part2:", windowIncreases);
}

main();
