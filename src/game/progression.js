import { cons } from 'hexlet-pairs';
import game from '..';
import randomNumber from '../random';

const rules = 'What number is missing in this progression?';

const makeProgression = (firstNumber, diff, arr, repeat) => {
  if (repeat === 0) {
    return arr;
  }
  arr.push(firstNumber);
  return makeProgression(firstNumber + diff, diff, arr, repeat - 1);
};

const pairQA = () => {
  const firstNumber = randomNumber(1, 50);
  const difference = randomNumber(1, 10);
  const rand = randomNumber(0, 9);
  const progression = makeProgression(firstNumber, difference, [], 10);
  const answer = progression[rand];
  progression[rand] = '..';
  const question = progression.join(' ');

  return cons(question, String(answer));
};

const progressionGame = () => game(rules, pairQA);

export default progressionGame;
