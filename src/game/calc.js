import { cons } from 'hexlet-pairs';
import game from '..';
import randomNumber from '../random';

const rules = 'What is the result of the expression?';

const randomAction = () => {
  switch (Math.floor(Math.random() * 4)) {
    case 2: return '+';
    case 3: return '*';
    default: return '-';
  }
};

const pairQA = () => {
  const firstNumber = randomNumber(1, 99);
  const secondNumber = randomNumber(1, 10);
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
  return cons(question, String(answer));
};

const calcGame = () => game(rules, pairQA);

export default calcGame;
