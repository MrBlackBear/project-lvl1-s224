import { cons } from 'hexlet-pairs';
import game from '..';
import randomNumber from '../random';

const isEven = number => number % 2 === 0;

const rules = 'Answer "yes" if number even otherwise answer "no".';

const makeAnswer = question => (isEven(question) ? 'yes' : 'no');

const pairQA = () => {
  const question = randomNumber(1, 99);
  return cons(question, makeAnswer(question));
};

const evenGame = () => game(rules, pairQA);

export default evenGame;
