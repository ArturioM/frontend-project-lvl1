import readlineSync from 'readline-sync'

const result = (userName) => {
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
