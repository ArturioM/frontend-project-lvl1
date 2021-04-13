import playGame from '../index.js';
import getRandomInRange from '../utils/random-number.js';

const task = 'What is the result of the expression?';

const calculation = (num1, num2, randomOp, operatorss) => {
  switch (operatorss[randomOp]) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      return null;
  }
};

const genRoundData = () => {
  const number1 = getRandomInRange(1, 10);
  const number2 = getRandomInRange(1, 10);
  const randomOperator = getRandomInRange(0, 2);
  const operators = ['+', '-', '*'];
  const operator = operators[randomOperator];
  const question = `${number1} ${operator} ${number2}`;
  const calcutionResult = String(
    calculation(number1, number2, randomOperator, operators),
  );
  const answerAndCalculation = [question, calcutionResult];
  return answerAndCalculation;
};

export default () => {
  playGame(genRoundData, task);
};
