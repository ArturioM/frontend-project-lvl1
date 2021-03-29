import readlineSync from 'readline-sync'

export const question = () => readlineSync.question('Your answer: ')
export const name = () => readlineSync.question('May I have your name? ')

export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let counter = 0
export const result = (userName) => {
  const numberStart = getRandomInRange(6, 15)
  const numberStep = getRandomInRange(3, 6)
  const numberEmpty = getRandomInRange(1, 8)
  const numberNeed = numberStart + numberStep * (numberEmpty + 1)

  const conculation = (numberStart, numberStep, numberEmpty) => {
    let result = []
    let partResult = numberStart
    for (let i = 0; i < 9; i += 1) {
      if (i === numberEmpty) {
        result.push('..')
        partResult += numberStep
        i += 1
      }
      partResult += numberStep
      result.push(partResult)
    }
    return result
  }

  const conculationResult = conculation(
    numberStart,
    numberStep,
    numberEmpty
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
