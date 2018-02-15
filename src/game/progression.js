import { cons } from 'hexlet-pairs';
import game from '..';
import randomNumber from '../random';

const rules = 'What number is missing in this progression?';

const makeProgression = (firstNumber, diff) => {
  const progression = [];
  progression.push(firstNumber);
  let fNumber = firstNumber;
  for (let i = 0; i < 9; i += 1) {
    fNumber += diff;
    progression.push(fNumber);
  }
  return progression;
};

const pairQA = () => {
  const firstNumber = randomNumber(1, 50);
  const difference = randomNumber(1, 10);
  const rand = randomNumber(0, 9);
  const progression = makeProgression(firstNumber, difference)
  const answer = progression[rand];
  progression[rand] = '..';
  const question = progression.join(' ');

  return cons(question, String(answer));
};

const progressionGame = () => game(rules, pairQA);

export default progressionGame;
