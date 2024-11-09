function getDivisors(num) {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (i !== num / i) divisors.push(num / i);
    }
  }
  return divisors.sort((a, b) => a - b);
}

function findCommonDivisors(numbers) {
  if (numbers.length === 0) return [];
  let commonDivisors = getDivisors(numbers[0]);
  for (let i = 1; i < numbers.length; i++) {
    const currentDivisors = getDivisors(numbers[i]);
    commonDivisors = commonDivisors.filter(divisor => currentDivisors.includes(divisor));
  }
  return commonDivisors;
}

const numbers = [42, 12, 18];
console.log(findCommonDivisors(numbers));


module.exports = findCommonDivisors;
