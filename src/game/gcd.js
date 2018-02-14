import { cons } from 'hexlet-pairs';
import game from '..';
import randomNumber from '../random';

const rules = 'Find the greatest common divisor of given numbers.';

const gcdOfTwoNumbers = (firstNumber, secondNumber) => {
  if (secondNumber > 0) {
    const k = firstNumber % secondNumber;
    return gcdOfTwoNumbers(secondNumber, k);
  }
  return Math.abs(firstNumber);
};

const pairQA = () => {
  const firstNumber = randomNumber(1, 50);
  const secondNumber = randomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcdOfTwoNumbers(firstNumber, secondNumber);

  return cons(question, String(answer));
};

const gcdGame = () => game(rules, pairQA);

export default gcdGame;
