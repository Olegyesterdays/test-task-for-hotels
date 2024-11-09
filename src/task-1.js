function getComputerWord(num) {
  const absNum = Math.abs(num);
  const lastTwoDigits = absNum % 100;
  const lastDigit = absNum % 10;

  let text;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    text = 'компьютеров';
  } else if (lastDigit === 1) {
    text = 'компьютер';
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    text = 'компьютера';
  } else {
    text = 'компьютеров';
  }

  return `${num} ${text}`;
}

const num = 5;
console.log(getComputerWord(num));

module.exports = getComputerWord;
