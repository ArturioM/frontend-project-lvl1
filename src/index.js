import readlineSync from 'readline-sync';
import greetingGame from './utils/greeting.js';

const counter = 3;

export default (genRoundData, task) => {
  greetingGame();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  for (let i = 0; i < counter; i += 1) {
    const [quest, correctAnswer] = genRoundData();
    console.log(`Question: ${quest}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
