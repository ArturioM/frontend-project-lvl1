import playGame from '../index.js';
import getRandomInRange from '../mathRandom/random-number.js';

const result = () => {
  const number = getRandomInRange(1, 100);
  const calcutionResult = number % 2 === 0 ? 'yes' : 'no';
  const question = number;
  const answerAndCalculation = [question, calcutionResult];
  return answerAndCalculation;
};

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(result, task);
};
