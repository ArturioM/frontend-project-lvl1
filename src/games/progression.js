import playGame from '../index.js';
import getRandomInRange from '../utils/random-number.js';

const task = 'Find the greatest common divisor of given numbers.';
const progressionLength = 10;
const hiddenElementIndex = getRandomInRange(1, 8);

const questionAll = (startNumber, stepNumber, hiddenElementIndex) => {
  const result = [];
  let currentElement = startNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenElementIndex) {
      result.push('..');
    } else {
      result.push(currentElement);
    }
    currentElement += stepNumber;
  }
  return result;
};

const genRoundData = () => {
  const numberStart = getRandomInRange(6, 15);
  const numberStep = getRandomInRange(3, 6);
  const numberNeed = numberStart + numberStep * hiddenElementIndex;
  const question = questionAll(
    numberStart,
    numberStep,
    hiddenElementIndex,
  ).join(' ');
  const correctAnswer = String(numberNeed);
  const answerAndCalculation = [question, correctAnswer];
  return answerAndCalculation;
};

export default () => {
  playGame(genRoundData, task);
};
