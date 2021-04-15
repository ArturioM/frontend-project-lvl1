import playGame from '../index.js';
import getRandomInRange from '../utils/random-number.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGCD = (numberOne, numberTwo) => {
  const bigNumber = numberOne > numberTwo ? numberOne : numberTwo;
  let res = 0;
  for (let i = 0; i <= bigNumber; i += 1) {
    if (numberOne % i === 0 && numberTwo % i === 0) {
      res = i;
    }
  }
  return res;
};

const genRoundData = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));
  const answerAndCalculation = [question, correctAnswer];
  return answerAndCalculation;
};

export default () => {
  playGame(genRoundData, task);
};
