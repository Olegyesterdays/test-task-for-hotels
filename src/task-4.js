function generateMultiplicationTable(size) {
  const table = [];

  for (let i = 0; i <= size; i++) {
    const row = [];
    for (let j = 0; j <= size; j++) {
      if (i === 0 && j === 0) {
        row.push(' ');
      } else if (i === 0) {
        row.push(j); // Номер столбца в первой строке
      } else if (j === 0) {
        row.push(i); // Номер строки в первом столбце
      } else {
        row.push(i * j);
      }
    }
    table.push(row);
  }

  return table;
}

function formatTableWithHeaders(table) {
  const maxWidth = Math.max(...table.flat().map(num => num.toString().length));

  return table.map(row => row.map(num => num.toString().padStart(maxWidth, ' ')).join(' ')).join('\n');
}

const size = 10;
const table = generateMultiplicationTable(size);
const formattedTable = formatTableWithHeaders(table);
console.log(formattedTable);

module.exports = { generateMultiplicationTable, formatTableWithHeaders };