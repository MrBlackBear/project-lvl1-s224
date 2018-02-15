import { cons } from 'hexlet-pairs';
import game from '..';
import randomNumber from '../random';

const isPrime = (number) => {
  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const YES = 'yes';
const NO = 'no';
const rules = 'Is this number prime?';

const makeAnswer = question => (isPrime(question) ? YES : NO);

const pairQA = () => {
  const question = randomNumber(1, 199);
  return cons(question, makeAnswer(question));
};

const primeGame = () => game(rules, pairQA);

export default primeGame;
