const readlineSync = require('readline-sync');
const chalk = require('chalk');


console.log(chalk.yellow.bold("Welcome to the Quiz\n"))


let score = 0;

let player = readlineSync.question("Tell Me Your Name: ")
console.log(chalk.green(`\nWelcome ${player}\n`))
console.log(chalk.yellow.bold("write answers in small letter\n"))
let option=""
do{


function Quiz(questions,answer){
  let response = readlineSync.question(chalk.yellow("\n"+questions))

  if(answer === response){
    console.log(chalk.green ("\nCorrect"))
    score = score + 1
  }else{
    console.log(chalk.red (" \nWrong"))
    console.log(chalk.green ("\nCorrect Answer is "+answer))
    score = score - 1
  }
  console.log(chalk.red('\nYour score is  :' + score)); 
}

qa_arr =[
  {
     q: "What is the Fullform of JS? ",
     a: "javaScript"
  },
   {
     q: "HTML stands for? ",
     a: "hypertext markup language"
  },
   {
     q: "What is the Fullform of CSS? ",
      a: "casecading stylesheet"
  },
   {
     q: "What is the Fullform of HTTP ",
      a: "hypertext transfer protocol"
  }
]
//qa_arr = [qa1,qa2,qa3,qa4];
for(let i =0; i<qa_arr.length;i++){
  Quiz(qa_arr[i].q,qa_arr[i].a)
}

console.log("\n"+player + ' Your Final score is  : ' + score + '\n');

highScore_arr = [
  {
    player: "Harsh",
    score: 2
  },
  {
    player: "Shubham",
    score: 1
  },
  {
    player: "Niraj",
    score: 0
  },
   {
    player: "Ankit",
    score: 3
  },
]

console.log("Previous High Scores")



let highscore = highScore_arr[0].score

for(let i = 1; i<highScore_arr.length;i++){
  if(highScore_arr[i].score > highscore){
    highscore = highScore_arr[i].score
  }
}


if(score>highscore){
  highScore_arr[3].player = player
  highScore_arr[3].score = score
  console.log("\n"+player + ' Congrats, You Beat the high score\n');
}else{
  console.log("\n"+player + ',Try Again\n');
}
console.table(highScore_arr)
score = 0
option = readlineSync.keyInYN("Do you want Play Again?")

}while(option)