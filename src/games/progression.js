import playGame from '../index.js';
import getRandomInRange from '../utils/random-number.js';

const task = 'Find the greatest common divisor of given numbers.';

const questionAll = (startNumber, stepNumber, emptyNumber) => {
  const result = [];
  let partResult = startNumber;
  for (let i = 0; i < 9; i += 1) {
    if (i === emptyNumber) {
      result.push('..');
      partResult += stepNumber;
      i += 1;
    }
    partResult += stepNumber;
    result.push(partResult);
  }
  return result;
};

const genRoundData = () => {
  const numberStart = getRandomInRange(6, 15);
  const numberStep = getRandomInRange(3, 6);
  const numberEmpty = getRandomInRange(1, 8);
  const numberNeed = numberStart + numberStep * (numberEmpty + 1);
  const question = questionAll(numberStart, numberStep, numberEmpty).join(' ');
  const calcutionResult = String(numberNeed);
  const answerAndCalculation = [question, calcutionResult];
  return answerAndCalculation;
};

export default () => {
  playGame(genRoundData, task);
};
