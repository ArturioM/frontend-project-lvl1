import readlineSync from 'readline-sync'

export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export const name = () => readlineSync.question('May I have your name? ')
export const question = () => readlineSync.question('Your answer: ')
let counter = 0
export const result = (userName) => {
  const number = getRandomInRange(1, 100)
  console.log(`Question: ${number}`)
  const answer = question()
  if (number % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!')
      counter += 1
      return resultRepeat(userName)
    } else {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again!, ${userName}!`
      )
    }
  } else {
    if (answer === 'no') {
      console.log('Correct!')
      counter += 1
      return resultRepeat(userName)
    } else {
      console.log(
        `'no' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`
      )
    }
  }
}

export const resultRepeat = (userName) => {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`)
    return null
  }
  return result(userName, counter)
}

// export const resultAll = (userName, counter) => {
//   const result = (userName) => {
//     const number = getRandomInRange(1, 100)
//     console.log(`Question: ${number}`)
//     const answer = question()
//     if (number % 2 === 0) {
//       if (answer === 'yes') {
//         console.log('Correct!')
//         counter += 1
//       } else {
//         console.log(
//           `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again!, ${userName}!`
//         )
//       }
//     } else {
//       if (answer === 'no') {
//         console.log('Correct!')
//         counter = counter + 1
//       } else {
//         console.log(
//           `'no' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`
//         )
//       }
//     }
//   }
//   if (counter !== 3) {
//     return result(userName, counter)
//   }
// }

// const result = (userName) => {
//   const number = getRandomInRange(1, 100)
//   let counter = 0
//   console.log(`Question: ${number}`)
//   const answer = question()
//   if (number % 2 === 0) {
//     if (answer === 'yes') {
//       console.log('Correct!')
//       counter += 1
//     } else {
//       console.log(
//         `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again!, ${userName}!`
//       )
//     }
//   } else {
//     if (answer === 'no') {
//       console.log('Correct!')
//       counter = counter + 1
//     } else {
//       console.log(
//         `'no' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`
//       )
//     }
//   }
// }

// export const result = (number, answer, userName, counter) => {
//   if (number % 2 === 0) {
//     if (answer === 'yes') {
//       console.log('Correct!')
//       counter = counter + 1
//       console.log(counter)
//     } else {
//       console.log(
//         `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again!, ${userName}!`
//       )
//     }
//   } else {
//     if (answer === 'no') {
//       console.log('Correct!')
//       counter = counter + 1
//     } else {
//       console.log(
//         `'no' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`
//       )
//     }
//   }
// }

// const repeatResult = () => {
//       if (number % 2 === 0) {
//     if (answer === 'yes') {
//       console.log('Correct!')
//       counter = counter + 1
//       console.log(counter)
//     } else {
//       console.log(
//         `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again!, ${userName}!`
//       )
//     }
// }

// export const question = () => {
//   readlineSync.question(`Question: ${getRandomInRange(1, 100)}`)
// }
