import { getRandomInRange } from '../src/even.js'
import { result } from '../src/even.js'
import { resultRepeat } from '../src/even.js'
import { name } from '../src/cli.js'
import { question } from '../src/even.js'
console.log('Welcome to the Brain Games!')
const userName = name()
console.log(`Hello, ${userName}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')
result(userName)
// resultRepeat(result, userName, counter)

// const counter = 0
// const number = getRandomInRange(1, 100)
// console.log(`Question: ${number}`)
// const answer = question()
// result(number, answer, userName, counter)

// const repeatResult = result(number, answer, userName, counter)

// if (counter === 3) {
//   console.log(`Congratulations, ${userName}`)
// }
// console.log(`Question: ${getRandomInRange(1, 100)}`)
// question()
// result(number, answer, userName, counter)
// console.log(counter)

// const repeat = (answer) => {
//   answer === 3
//     ? console.log(`Congratulations, ${userName}`)
//     : result(number, answer, userName, counter)
// }
// repeat()

// if (answer === 3) {
//   console.log(`Congratulations, ${userName}`)
// }

// const question = () => {
//   if (getRandomInRange(1, 100) % 2 === 0) {
//     return 'yes'
//   }
//   return 'no'
// }
