// Импортируем функции
const { generateMultiplicationTable, formatTableWithHeaders } = require('../src/task-4');

describe('generateMultiplicationTable', () => {
  test('correctly generates a 5x5 multiplication table with headers', () => {
    const size = 5;
    const expectedTable = [
      [' ', 1, 2, 3, 4, 5],
      [1, 1, 2, 3, 4, 5],
      [2, 2, 4, 6, 8, 10],
      [3, 3, 6, 9, 12, 15],
      [4, 4, 8, 12, 16, 20],
      [5, 5, 10, 15, 20, 25]
    ];
    const table = generateMultiplicationTable(size);
    expect(table).toEqual(expectedTable);
  });

  test('correctly generates a 1x1 multiplication table', () => {
    const size = 1;
    const expectedTable = [
      [' ', 1],
      [1, 1]
    ];
    const table = generateMultiplicationTable(size);
    expect(table).toEqual(expectedTable);
  });

  test('correctly generates a 10x10 multiplication table', () => {
    const size = 10;
    const table = generateMultiplicationTable(size);
    expect(table[1][10]).toBe(10);
    expect(table[10][1]).toBe(10);
    expect(table[10][10]).toBe(100);
  });

  test('returns empty table for size 0', () => {
    const size = 0;
    const expectedTable = [[' ']];
    const table = generateMultiplicationTable(size);
    expect(table).toEqual(expectedTable);
  });
});

describe('formatTableWithHeaders', () => {
  test('correctly formats a 5x5 multiplication table with alignment', () => {
    const table = [
      [' ', 1, 2, 3, 4, 5],
      [1, 1, 2, 3, 4, 5],
      [2, 2, 4, 6, 8, 10],
      [3, 3, 6, 9, 12, 15],
      [4, 4, 8, 12, 16, 20],
      [5, 5, 10, 15, 20, 25]
    ];
    const formattedTable = formatTableWithHeaders(table);
    const expectedOutput = [
      '    1  2  3  4  5',
      ' 1  1  2  3  4  5',
      ' 2  2  4  6  8 10',
      ' 3  3  6  9 12 15',
      ' 4  4  8 12 16 20',
      ' 5  5 10 15 20 25'
    ].join('\n');
    expect(formattedTable).toBe(expectedOutput);
  });

  test('returns an empty string for an empty table', () => {
    const table = [[' ']];
    const formattedTable = formatTableWithHeaders(table);
    const expectedOutput = ' ';
    expect(formattedTable).toBe(expectedOutput);
  });
});
