function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function getPrimesInRange(start, end) {
  const primes = [];
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) primes.push(num);
  }
  return primes;
}

const start = 11;
const end = 20;
console.log(getPrimesInRange(start, end));

module.exports = getPrimesInRange;
