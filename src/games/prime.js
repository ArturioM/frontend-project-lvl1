import playGame from '../index.js';
import getRandomInRange from '../mathRandom/random-number.js';

const result = () => {
  const numberSimple = getRandomInRange(1, 100);
  const question = numberSimple;
  const conculatition = (simpleNumber) => {
    for (let i = 2; i < simpleNumber; i += 1) {
      if (simpleNumber % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const calcutionResult = conculatition(numberSimple);
  const answerAndCalculation = [question, calcutionResult];
  return answerAndCalculation;
};

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(result, task);
};
