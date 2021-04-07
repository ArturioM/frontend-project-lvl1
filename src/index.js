import readlineSync from 'readline-sync';
import greetingGame from './cli.js';

export default (result, text) => {
  const name = greetingGame();
  const rounds = 3;
  const task = text;
  console.log(task);
  for (let i = 0; i < rounds; i += 1) {
    const answerAndCalculation = result();
    const calcutionResult = answerAndCalculation[1];
    console.log(`Question: ${answerAndCalculation[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === calcutionResult) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${calcutionResult}'.\nLet's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
