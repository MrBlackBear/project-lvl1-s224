import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const repeatNeedTime = 3;

const game = (rules, pairQA) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${rules}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < repeatNeedTime; i += 1) {
    const realPairQA = pairQA();
    const question = car(realPairQA);
    const answer = String(cdr(realPairQA));
    console.log(`Question:  ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default game;
