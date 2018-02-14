import { cons } from 'hexlet-pairs';
import game from './engine';

const randomBigNumber = () => 10 + Math.floor(Math.random() * 21);
const randomNumber = () => Math.floor(Math.random() * 11);

const rules = 'Find the greatest common divisor of given numbers.';

const gcdOfTwoNumbers = (firstNumber, secondNumber) => {
  if (secondNumber > 0) {
    const k = firstNumber % secondNumber;
    return gcdOfTwoNumbers(secondNumber, k);
  }
  return Math.abs(firstNumber);
};

const pairQA = () => {
  const firstNumber = randomBigNumber();
  const secondNumber = randomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcdOfTwoNumbers(firstNumber, secondNumber);

  return cons(question, answer);
};

const gcdGame = () => game(rules, pairQA);

export default gcdGame;
