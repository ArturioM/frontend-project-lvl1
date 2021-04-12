import playGame from '../index.js';
import getRandomInRange from '../utils/random-number.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const genRoundData = () => {
  const number = getRandomInRange(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return [question, correctAnswer];
};

export default () => {
  playGame(genRoundData, task);
};
