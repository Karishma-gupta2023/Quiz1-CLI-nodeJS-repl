//Add packages 
import chalk from "chalk";
import readlineSync from "readline-sync";

function welcomeUser(){
var userName = readlineSync.question("May I know your name: ");
console.log("Welcome " + chalk.yellow(userName) + " to play the game" + (chalk.blue("----DO YOU KNOW KARISHMA----")));
}

//Array of Objects to hold questions and answers
var questionAnswer = [
  {question: "Where do I live? ",
   answer: "Noida"},
  {question: "Where do I work? ",
   answer: "Adobe"},
  {question: "What is my favorite fruit? ",
   answer: "Chiku"},
  {question: "What is my favorite color? ",
   answer: "black"},
  {question: "Do I like pets? ",
   answer: "No"},
];

var score = 0;

//Array of objects to hold high scores
var highScore= [
  {name: "Karishma",
   score:9},
  {name: "Shivam",
   score:8},
  
]
  
  


//function to play
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
    
      if(userAnswer.toUpperCase()===answer.toUpperCase()){
        console.log(chalk.green("Right"));
        score=score+2;
        }
      else{
        console.log(chalk.red("Wrong"));
        score=score-1;
      }
      console.log("Your Score is: " + score); 
    
  }

//function game
function game(){
  for(var i=0; i<questionAnswer.length; i++)
    {
      var currentQuestion = questionAnswer[i];
      play(currentQuestion.question, currentQuestion.answer);
      }
  console.log(chalk.blue("Yay, your final score is: ")+ score);
}

/*function highScores(){
  
  //console.log("Top 2 high Scores are :");
  for(var j=0;j<highScore.length;j++){
    var currentScore = highScore[j];
    if(score>currentScore.score[j]){
      console.log("Congrats, you have created a high score, please share a screengrab")
      
    }
  }
  
}*/

welcomeUser();
game();
//highScores();