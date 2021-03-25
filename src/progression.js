import readlineSync from 'readline-sync'

export const question = () => readlineSync.question('Your answer: ')
export const name = () => readlineSync.question('May I have your name? ')

export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let counter = 0
export const result = (userName) => {
  const number1 = getRandomInRange(6, 15)
  const number2 = getRandomInRange(3, 6)
  const number3 = getRandomInRange(1, 4)
  const numberNeed = number1 + number2 * number3
  const number12 = number1 * number2

  const conculation = (number1, number2, number12, number3) => {
    let res = []
    for (let i = number1; i < number12; i += number2) {
      if (i === number1 + number2 * number3) {
        res.push('..')
        i += number2
      }
      res.push(i)
    }
    return res
  }

  const conculationResult = conculation(
    number1,
    number2,
    number12,
    number3
  ).join(' ')

  console.log(`Question: ${conculationResult}`)
  const answer = question()
  if (Number(answer) === numberNeed) {
    console.log('Correct!')
    counter += 1
    return resultRepeat(userName)
  } else {
    console.log(
      `${answer} is wrong answer ;(. Correct answer was ${numberNeed} 
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
