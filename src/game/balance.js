import { cons } from 'hexlet-pairs';
import game from '..';
import randomNumber from '../random';

const rules = 'Balance the given number.';

const isBalanced = (number) => {
  const dig = String(number).split('');
  dig.sort();
  return ((dig[dig.length - 1] - dig[0]) <= 1) && (dig.join('') === String(number));
};

const balance = (number) => {
  const dig = String(number).split('');
  if (isBalanced(number)) {
    return number;
  }

  dig.sort();
  dig[0] = Number(dig[0]) + 1;
  dig[dig.length - 1] = Number(dig[dig.length - 1]) - 1;
  dig.sort();
  return balance(dig.join(''));
};

const pairQA = () => {
  const number = randomNumber(1, 9999);

  const question = `${number}`;
  const answer = balance(number);

  return cons(question, String(answer));
};

const balanceGame = () => game(rules, pairQA);

export default balanceGame;
