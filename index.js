var readlineSync = require("readline-sync");

const chalk = require('chalk');

var userName = readlineSync.question(chalk.hex('#E5BA0D')("Whats Your Name? "));

console.log("Welcome, " + userName.toUpperCase());

var youKnowArchit = readlineSync.question(chalk.hex('#E5BA0D')("DO you know Archit "));


if (youKnowArchit.toLowerCase() === "yes" ) {
  console.log("Cool lets play the Game, " + userName.toUpperCase());
}


console.log("---------");

var highScore = {
  name: "Aayush",
  score: 4,
}


var score  = 0;

var questionOne = {
  question: "Archit's favorite food? ",
  options: ["(a) Burger" , "(b) Cheese Sanwich" , "(c) Pizza" , "(d) White Sauce Pasta"],
  answer: "d",
  correctAnswer: "(d) White Sauce Pasta"
  
}

var questionTwo = {
  question: "Archit's favorite song? ",
  options: ["(a) Friends" , "(b) Humraah" , "(c) This Feeling" , "(d) Brown Rang De"],
  answer: "c",
  correctAnswer: "(c) This Feeling"
}

var questionThree = {
  question: "Archit's favorite Cartoon show? ",
  options: ["(a) Tom And Jerry" , "(b) Phineas and Ferb" , "(c) Pokémon" , "(d) Dragon Ball Z"],
  answer: "a",
  correctAnswer: "(a) Tom And Jerry"
}

var questionFour = {
  question: "Archit's favorite Book? ",
  options: ["(a) Harry Potter and the Philosopher’s Stone" , "(b) Rich Dad Poor Dad" , "(c) The Lord of the Rings" , "(d) The Book Thief"],
  answer: "b",
  correctAnswer: "(d) The Book Thief"
}

var questionFive = {
  question: "Archit's favorite color? ",
  options: ["(a) Black" , "(b) Yellow" , "(c) Olive Green" , "(d) Meteor Gray"],
  answer: "c",
  correctAnswer: "(c) Olive Green"
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

if (youKnowArchit.toLowerCase() === "yes" ) {
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



