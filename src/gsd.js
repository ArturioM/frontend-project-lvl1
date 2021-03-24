import readlineSync from 'readline-sync'

export const question = () => readlineSync.question('Your answer: ')
export const name = () => readlineSync.question('May I have your name? ')

export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let counter = 0
export const result = (userName) => {
  const number1 = getRandomInRange(1, 100)
  const number2 = getRandomInRange(1, 100)
  const bigNumber = number1 > number2 ? number1 : number2

  const conculation = (number1, number2, bigNumber) => {
    let res = 0
    for (let i = 0; i < bigNumber; i += 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        res = i
      }
    }
    return res
  }
  const conculationResult = conculation(number1, number2, bigNumber)

  console.log(`Question: ${number1} ${number2}`)
  const answer = question()
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
