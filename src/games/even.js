import readlineSync from 'readline-sync';

export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const name = () => readlineSync.question('May I have your name? ');
export const question = () => readlineSync.question('Your answer: ');
let counter = 0;
export const result = (userName) => {
  const number = getRandomInRange(1, 100);
  console.log(`Question: ${number}`);
  const answer = question();
  if (number % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      counter += 1;
      // eslint-disable-next-line no-use-before-define
      return resultRepeat(userName);
    }
    console.log(
      `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again!, ${userName}!`,
    );
  } else {
    if (answer === 'no') {
      console.log('Correct!');
      counter += 1;
      // eslint-disable-next-line no-use-before-define
      return resultRepeat(userName);
    }
    console.log(
      `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`,
    );
  }
  return null;
};

export const resultRepeat = (userName) => {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return null;
  }
  return result(userName, counter);
};
