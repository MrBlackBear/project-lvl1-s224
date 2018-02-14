import { cons } from 'hexlet-pairs';
import game from './engine';

const isEven = number => number % 2 === 0;
const makeQuestion = () => Math.floor(Math.random() * 31);

const YES = 'yes';
const NO = 'no';
const rules = 'Answer "yes" if number even otherwise answer "no".';

const makeAnswer = question => (isEven(question) ? YES : NO);

const pairQA = () => {
  const question = makeQuestion();
  return cons(question, makeAnswer(question));
};

const evenGame = () => game(rules, pairQA);

export default evenGame;
