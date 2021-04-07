import playGame from '../index.js';
import getRandomInRange from '../mathRandom/random-number.js';

const result = () => {
  const numberStart = getRandomInRange(6, 15);
  const numberStep = getRandomInRange(3, 6);
  const numberEmpty = getRandomInRange(1, 8);
  const numberNeed = numberStart + numberStep * (numberEmpty + 1);
  const questionAll = (startNumber, stepNumber, emptyNumber) => {
    // eslint-disable-next-line no-shadow
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

  const questionAllResult = questionAll(
    numberStart,
    numberStep,
    numberEmpty,
  ).join(' ');
  const question = `${questionAllResult}`;
  const calcutionResult = String(numberNeed);
  const answerAndCalculation = [question, calcutionResult];
  return answerAndCalculation;
};

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  playGame(result, task);
};
