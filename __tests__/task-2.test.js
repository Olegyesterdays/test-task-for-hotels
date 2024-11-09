const findCommonDivisors = require('../src/task-2');

describe('findCommonDivisors', () => {
  test('should return common divisors for small array with common divisors', () => {
    expect(findCommonDivisors([42, 12, 18])).toEqual([1, 2, 3, 6]);
  });

  test('should return common divisors for array with two elements', () => {
    expect(findCommonDivisors([8, 12])).toEqual([1, 2, 4]);
  });

  test('should return [1] when there are no common divisors other than 1', () => {
    expect(findCommonDivisors([7, 11, 13])).toEqual([1]);
  });

  test('should return divisors of a single element array', () => {
    expect(findCommonDivisors([10])).toEqual([1, 2, 5, 10]);
  });

  test('should return all divisors for an array of identical numbers', () => {
    expect(findCommonDivisors([8, 8, 8])).toEqual([1, 2, 4, 8]);
  });

  test('should return common divisors for larger numbers', () => {
    expect(findCommonDivisors([100, 200, 300])).toEqual([1, 2, 4, 5, 10, 20, 25, 50, 100]);
  });

  test('should handle array with prime numbers only', () => {
    expect(findCommonDivisors([5, 7, 11])).toEqual([1]);
  });

  test('should handle array with mix of primes and composite numbers', () => {
    expect(findCommonDivisors([5, 10, 20])).toEqual([1, 5]);
  });

  test('should handle array with large prime numbers', () => {
    expect(findCommonDivisors([101, 103, 107])).toEqual([1]);
  });

  test('should return common divisors for numbers with multiple common divisors', () => {
    expect(findCommonDivisors([36, 60, 72])).toEqual([1, 2, 3, 4, 6, 12]);
  });

  test('should return correct divisors for very small numbers', () => {
    expect(findCommonDivisors([1, 2, 3])).toEqual([1]);
    expect(findCommonDivisors([1])).toEqual([1]);
  });

  test('should handle array where one element is a multiple of the others', () => {
    expect(findCommonDivisors([6, 18, 36])).toEqual([1, 2, 3, 6]);
  });

  test('should handle large composite numbers with a few common divisors', () => {
    expect(findCommonDivisors([252, 108, 84])).toEqual([1, 2, 3, 4, 6, 12]);
  });

  test('should handle array where elements are powers of a number', () => {
    expect(findCommonDivisors([4, 16, 64])).toEqual([1, 2, 4]);
  });

  test('should return empty array when input is an empty array', () => {
    expect(findCommonDivisors([])).toEqual([]);
  });
});
