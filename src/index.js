import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const game = (rules, pairQA) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${rules}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const round = (count) => {
    if (count > 0) {
      const realPairQA = pairQA();
      const question = car(realPairQA);
      const answer = (cdr(realPairQA));
      console.log(`Question:  ${question}`);
      const yourAnswer = readlineSync.question('Your answer: ');
      if (yourAnswer === answer) {
        console.log('Correct!');
        round(count - 1);
      } else {
        console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
        console.log(`Let's try again, ${userName}!`);
      }
    } else {
      console.log(`Congratulations, ${userName}!`);
    }
  };

  const countOfRounds = 3;
  round(countOfRounds);
};

export default game;
