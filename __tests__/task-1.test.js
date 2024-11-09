const getComputerWord = require('../src/task-1');

describe('getComputerWord', () => {
  test('handles numbers from 0 to 10', () => {
    expect(getComputerWord(0)).toBe('0 компьютеров');
    expect(getComputerWord(1)).toBe('1 компьютер');
    expect(getComputerWord(2)).toBe('2 компьютера');
    expect(getComputerWord(3)).toBe('3 компьютера');
    expect(getComputerWord(4)).toBe('4 компьютера');
    expect(getComputerWord(5)).toBe('5 компьютеров');
    expect(getComputerWord(6)).toBe('6 компьютеров');
    expect(getComputerWord(7)).toBe('7 компьютеров');
    expect(getComputerWord(8)).toBe('8 компьютеров');
    expect(getComputerWord(9)).toBe('9 компьютеров');
    expect(getComputerWord(10)).toBe('10 компьютеров');
  });

  test('handles numbers from 11 to 20', () => {
    expect(getComputerWord(11)).toBe('11 компьютеров');
    expect(getComputerWord(12)).toBe('12 компьютеров');
    expect(getComputerWord(13)).toBe('13 компьютеров');
    expect(getComputerWord(14)).toBe('14 компьютеров');
    expect(getComputerWord(15)).toBe('15 компьютеров');
    expect(getComputerWord(16)).toBe('16 компьютеров');
    expect(getComputerWord(17)).toBe('17 компьютеров');
    expect(getComputerWord(18)).toBe('18 компьютеров');
    expect(getComputerWord(19)).toBe('19 компьютеров');
    expect(getComputerWord(20)).toBe('20 компьютеров');
  });

  test('handles edge cases', () => {
    expect(getComputerWord(21)).toBe('21 компьютер');
    expect(getComputerWord(22)).toBe('22 компьютера');
    expect(getComputerWord(25)).toBe('25 компьютеров');
    expect(getComputerWord(101)).toBe('101 компьютер');
    expect(getComputerWord(102)).toBe('102 компьютера');
    expect(getComputerWord(111)).toBe('111 компьютеров');
  });

  test('handles large numbers', () => {
    expect(getComputerWord(1000)).toBe('1000 компьютеров');
    expect(getComputerWord(1001)).toBe('1001 компьютер');
    expect(getComputerWord(1002)).toBe('1002 компьютера');
    expect(getComputerWord(1011)).toBe('1011 компьютеров');
  });

  test('handles negative numbers', () => {
    expect(getComputerWord(-1)).toBe('-1 компьютер');
    expect(getComputerWord(-2)).toBe('-2 компьютера');
    expect(getComputerWord(-5)).toBe('-5 компьютеров');
  });
});
