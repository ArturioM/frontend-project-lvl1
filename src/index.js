import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const name = () => readlineSync.question('May I have your name? ')
const userName = name()
console.log(`Hello, ${userName}!`)
