import readlineSync from 'readline-sync'

export const question = () => readlineSync.question('Your answer: ')
export const name = () => readlineSync.question('May I have your name? ')

export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let counter = 0
export const result = (userName) => {
  const numberSimple = getRandomInRange(1, 100)
  const conculatition = (numberSimple) => {
    for (let i = 2; i < numberSimple; i += 1) {
      if (numberSimple % i === 0) {
        return 'no'
      }
    }
    return 'yes'
  }

  const conculationResult = conculatition(numberSimple)

  console.log(`Question: ${numberSimple}`)
  const answer = question()
  if (answer === conculationResult) {
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
