#!/usr/bin/env node
import { result, name } from '../src/games/calc.js';

console.log('Welcome to the Brain Games!');
const userName = name();
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');
result(userName);
