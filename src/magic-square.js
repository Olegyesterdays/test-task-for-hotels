function generatePermutations(array) {
  let results = [];

  function permute(arr, memo = []) {
    if (arr.length === 0) {
      results.push(memo);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), memo.concat(next));
      }
    }
  }

  permute(array);
  return results;
}

function magicSquare() {
  const x = [3, 4, 5, 6, 7, 8, 9, 10, 11];
  const permutations = generatePermutations(x);

  for (let perm of permutations) {
    if (perm[0] * perm[1] * perm[2] !== perm[0] * perm[3] * perm[6]) continue;
    if (perm[1] * perm[4] * perm[7] !== perm[3] * perm[4] * perm[5]) continue;
    if (perm[2] * perm[5] * perm[8] !== perm[6] * perm[7] * perm[8]) continue;

    const table = [
      [perm[0], perm[1], perm[2]],
      [perm[3], perm[4], perm[5]],
      [perm[6], perm[7], perm[8]]
    ];

    return formatTable(table)
  }
}

function formatTable(table) {
  const maxWidth = Math.max(...table.flat().map(num => num.toString().length));
  return table.map(row => row.map(num => num.toString().padStart(maxWidth, ' ')).join(' ')).join('\n');
}

console.log(magicSquare());

