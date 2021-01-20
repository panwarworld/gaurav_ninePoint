const readlineSync = require('readline-sync');
const chalk = require('chalk')
console.log(chalk.yellow.bold("Do You Know About Me?\n"))

console.log(chalk.yellow.bold("Write your answer in small letter\n"))

function QuizAboutMe(questions, answer) {
  let response = readlineSync.question(chalk.yellow("\n" + questions))

  if (answer === response) {
    console.log(chalk.green("\nCorrect"))
  } else {
    console.log(chalk.red(" \nWrong"))
  }

}

qa_arr = [
  {
    q: "What is my Nickname? ",
    a: "maddy"
  },
  {
    q: "My favourite Color? ",
    a: "blue"
  },
  {
    q: "Chess is My favourite Game, Yes or No? ",
    a: "yes"
  },
  {
    q: "Which Marvel Character I like most? ",
    a: "ironman"
  }
]

for (let i = 0; i < qa_arr.length; i++) {
  QuizAboutMe(qa_arr[i].q, qa_arr[i].a)
}

