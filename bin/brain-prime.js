import { result } from '../src/games/prime.js'
import { name } from '../src/games/prime.js'
console.log('Welcome to the Brain Games!')
const userName = name()
console.log(`Hello, ${userName}!`)
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
result(userName)
