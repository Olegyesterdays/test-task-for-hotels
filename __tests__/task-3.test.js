const findPrimesInRange = require('../src/task-3');

describe('findPrimesInRange', () => {
  test('should return prime numbers within a small range', () => {
    expect(findPrimesInRange(11, 20)).toEqual([11, 13, 17, 19]);
  });

  test('should return an empty array for range without prime numbers', () => {
    expect(findPrimesInRange(14, 16)).toEqual([]);
  });

  test('should return single prime when range is a single prime number', () => {
    expect(findPrimesInRange(17, 17)).toEqual([17]);
  });

  test('should return an empty array when range is a single non-prime number', () => {
    expect(findPrimesInRange(15, 15)).toEqual([]);
  });

  test('should return correct primes when both boundaries are prime', () => {
    expect(findPrimesInRange(2, 7)).toEqual([2, 3, 5, 7]);
  });

  test('should return primes for range that starts with non-prime and ends with prime', () => {
    expect(findPrimesInRange(10, 19)).toEqual([11, 13, 17, 19]);
  });

  test('should return primes for range that starts and ends with non-primes', () => {
    expect(findPrimesInRange(8, 10)).toEqual([]);
  });

  test('should return correct primes for large range', () => {
    expect(findPrimesInRange(50, 100)).toEqual([53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });

  test('should handle very small range including the smallest prime number', () => {
    expect(findPrimesInRange(2, 3)).toEqual([2, 3]);
  });

  test('should return an empty array for range entirely negative', () => {
    expect(findPrimesInRange(-10, -1)).toEqual([]);
  });

  test('should return primes for range that includes negative and positive numbers', () => {
    expect(findPrimesInRange(-10, 10)).toEqual([2, 3, 5, 7]);
  });

  test('should handle range where max is less than min (reversed range)', () => {
    expect(findPrimesInRange(20, 10)).toEqual([]);
  });

  test('should handle a large range with only a few primes', () => {
    expect(findPrimesInRange(90, 97)).toEqual([97]);
  });

  test('should handle range with upper boundary as large prime number', () => {
    expect(findPrimesInRange(90, 101)).toEqual([97, 101]);
  });

  test('should return correct primes for boundary range around a single prime', () => {
    expect(findPrimesInRange(28, 31)).toEqual([29, 31]);
  });

  test('should return primes for a small range starting at the smallest prime', () => {
    expect(findPrimesInRange(2, 5)).toEqual([2, 3, 5]);
  });

  test('should handle range that includes zero', () => {
    expect(findPrimesInRange(0, 10)).toEqual([2, 3, 5, 7]);
  });
});
