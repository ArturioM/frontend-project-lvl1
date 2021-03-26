import readlineSync from 'readline-sync'

export const question = () => readlineSync.question('Your answer: ')
export const name = () => readlineSync.question('May I have your name? ')

export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let counter = 0
export const result = (userName) => {
  const number1 = getRandomInRange(1, 10)
  const number2 = getRandomInRange(1, 10)
  const randomOperator = getRandomInRange(0, 2)
  const operators = ['+', '-', '*']
  const calculation = (num1, num2, numberOperator, operators) => {
    switch (operators[randomOperator]) {
      case '+':
        return num1 + num2

      case '-':
        return num1 - num2

      case '*':
        return num1 * num2
    }
  }
  const operator = operators[randomOperator]
  console.log(`Question: ${number1} ${operator} ${number2}`)
  const answer = question()
  const conculationResult = calculation(
    number1,
    number2,
    randomOperator,
    operators
  )
  if (Number(answer) === conculationResult) {
    console.log('Correct!')
    counter += 1
    return resultRepeat(userName)
  } else {
    console.log(
      `${answer} is wrong answer ;(. Correct answer was ${conculationResult} 
          \nLet's try again, again!, ${userName}!`
    )
  }
}

export const resultRepeat = (userName) => {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`)
    return null
  }
  return result(userName, counter)
}
