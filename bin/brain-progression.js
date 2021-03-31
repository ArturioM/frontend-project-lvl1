#!/usr/bin/env node
import { result, name } from '../src/games/progression.js';

console.log('Welcome to the Brain Games!');
const userName = name();
console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');
result(userName);
