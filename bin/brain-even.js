import { result } from '../src/even.js'
import { name } from '../src/cli.js'
console.log('Welcome to the Brain Games!')
const userName = name()
console.log(`Hello, ${userName}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')
result(userName)
