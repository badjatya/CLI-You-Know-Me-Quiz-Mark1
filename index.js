var readlineSync = require("readline-sync");

const chalk = require('chalk');

var userName = readlineSync.question(chalk.hex('#E5BA0D')("Whats Your Name? "));

console.log("Welcome, " + userName.toUpperCase());

var playCricket = readlineSync.question(chalk.hex('#E5BA0D')("DO you play cricket "));


if (playCricket.toLowerCase() === "yes" ) {
  console.log("Cool lets play the Game, " + userName.toUpperCase());
}


console.log("---------");

var highScore = {
  name: "Rajesh",
  score: 4,
}


var score  = 0;

var questionOne = {
  question: "India won first one day World cup in which year? ",
  options: ["(a) 1999" , "(b) 2011" , "(c) 1983" , "(d) 2007"],
  answer: "c",
  correctAnswer: "(c) 1983"
  
}

var questionTwo = {
  question: "Who captained India team in T20 World cup 2007? ",
  options: ["(a) Virat Kohli" , "(b) Mahendra Singh Dhoni" , "(c) Rohit Sharma" , "(d) Rahul Dravid"],
  answer: "b",
  correctAnswer: "(b) Mahendra Singh Dhoni"
}

var questionThree = {
  question: "How many balls are there in an over? ",
  options: ["(a) 5" , "(b) 10" , "(c) 8" , "(d) 6"],
  answer: "d",
  correctAnswer: "(d) 6"
}

var questionFour = {
  question: "World's biggest stadium in situated in which country? ",
  options: ["(a) India" , "(b) Australia" , "(c) England" , "(d) New Zealand"],
  answer: "a",
  correctAnswer: "(d) India"
}

var questionFive = {
  question: "World's Test Championship is hosted by? ",
  options: ["(a) India" , "(b) Australia" , "(c) England" , "(d) New Zealand"],
  answer: "c",
  correctAnswer: "(c) England"
}

var questions = [questionOne , questionTwo , questionThree , questionFour , questionFive];

function play (question , answer , option , correctAnswer) {

  console.log(`${chalk.hex('#E5BA0D')(question)}`);

  for (var i = 0; i < 4; i++) {
    console.log(`${option[i]}`)
  }

  var userAnswer = readlineSync.question(chalk.hex('#E5BA0D')("Choose The Correct Options: "));

  console.log("You have Entered: " + userAnswer.toUpperCase() );

  if (userAnswer.toUpperCase() == answer.toUpperCase() ) {
    console.log("You are " + chalk.green.bold("RIGHT!"));
    score++;
    console.log("---------");
  } else {
    console.log("You are " + chalk.red.bold("WRONG!"));

    console.log(`The correct answer is: ${chalk.hex('#ffd369')(correctAnswer)}`);
    console.log("---------");

  }
}

if (playCricket.toLowerCase() === "yes" ) {
  for (var i =0 ; i< questions.length ; i++) {
    var arrayQuestion = questions[i];

    play(arrayQuestion.question , arrayQuestion.answer , arrayQuestion.options , arrayQuestion.correctAnswer);
}

  console.log(chalk.hex('#fdb827')(`Your Final Score: ${chalk.bold(score)}`));

  if (score >= highScore.score) {
    console.log("---------");
    console.log(chalk.green.bold(userName) + " have beaten high score of " + chalk.grey(highScore.name));
    console.log("The Previous highest score was " + chalk.red(highScore.score))
    console.log ("Send screenshot to Archit of beating previous score and he will update this in database")
  } else {
    console.log("---------");
    console.log("The highest score is " + chalk.blue(highScore.score));
  }
  console.log("---------");
    console.log(chalk.hex('#fdb827')(`Your Final Score: ${chalk.bold(score)}`));
}



