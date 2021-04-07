import playGame from '../index.js';
import getRandomInRange from '../mathRandom/random-number.js';

const result = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 100);
  const question = `${number1} ${number2}`;
  const bigNumber = number1 > number2 ? number1 : number2;
  const calculation = (numberOne, numberTwo, numberBig) => {
    let res = 0;
    for (let i = 0; i <= numberBig; i += 1) {
      if (numberOne % i === 0 && numberTwo % i === 0) {
        res = i;
      }
    }
    return res;
  };
  const calcutionResult = String(calculation(number1, number2, bigNumber));
  const answerAndCalculation = [question, calcutionResult];
  return answerAndCalculation;
};

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  playGame(result, task);
};
