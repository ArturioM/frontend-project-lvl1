import playGame from '../index.js';
import getRandomInRange from '../utils/random-number.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const conculatition = (simpleNumber) => {
  if (simpleNumber <= 1) {
    return false;
  }
  for (let i = 2; i < simpleNumber; i += 1) {
    if (simpleNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const genRoundData = () => {
  const numberSimple = getRandomInRange(1, 100);
  const question = numberSimple;
  const calcutionResult = conculatition(numberSimple) ? 'yes' : 'no';
  const answerAndCalculation = [question, calcutionResult];
  return answerAndCalculation;
};

export default () => {
  playGame(genRoundData, task);
};
