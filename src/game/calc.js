import { cons } from 'hexlet-pairs';
import game from './engine';

const randomBigNumber = () => 10 + Math.floor(Math.random() * 21);
const randomNumber = () => Math.floor(Math.random() * 11);

const rules = 'What is the result of the expression?';

const randomAction = () => {
  const numberFromOnetoThree = Math.floor(Math.random() * 4);
  if (numberFromOnetoThree <= 1) {
    return '-';
  } else if (numberFromOnetoThree === 2) {
    return '+';
  }
  return '*';
};

const pairQA = () => {
  const firstNumber = randomBigNumber();
  const secondNumber = randomNumber();
  const randAction = randomAction();
  const question = `${firstNumber}${randAction}${secondNumber}`;
  let answer;
  switch (randAction) {
    case '+': answer = firstNumber + secondNumber;
      break;
    case '-': answer = firstNumber - secondNumber;
      break;
    case '*': answer = firstNumber * secondNumber;
      break;
    default: break;
  }
  return cons(question, answer);
};

const calcGame = () => game(rules, pairQA);

export default calcGame;
