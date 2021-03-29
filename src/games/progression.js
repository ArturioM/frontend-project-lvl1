import readlineSync from 'readline-sync';

export const question = () => readlineSync.question('Your answer: ');
export const name = () => readlineSync.question('May I have your name? ');

export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let counter = 0;
export const result = (userName) => {
  const numberStart = getRandomInRange(6, 15);
  const numberStep = getRandomInRange(3, 6);
  const numberEmpty = getRandomInRange(1, 8);
  const numberNeed = numberStart + numberStep * (numberEmpty + 1);

  const conculation = (startNumber, stepNumber, emptyNumber) => {
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

  const conculationResult = conculation(
    numberStart,
    numberStep,
    numberEmpty,
  ).join(' ');

  console.log(`Question: ${conculationResult}`);
  const answer = question();
  if (Number(answer) === numberNeed) {
    console.log('Correct!');
    counter += 1;
    // eslint-disable-next-line no-use-before-define
    return resultRepeat(userName);
  }
  console.log(
    `${answer} is wrong answer ;(. Correct answer was ${numberNeed} \nLet's try again, again!, ${userName}!`,
  );
  return null;
};

export const resultRepeat = (userName) => {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return null;
  }
  return result(userName, counter);
};
