import playGame from '../index.js';
import getRandomInRange from '../utils/random-number.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const conculatition = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const genRoundData = () => {
  const number = getRandomInRange(1, 100);
  const question = String(number);
  const correctAnswer = conculatition(number) ? 'yes' : 'no';
  const answerAndCalculation = [question, correctAnswer];
  return answerAndCalculation;
};

export default () => {
  playGame(genRoundData, task);
};
