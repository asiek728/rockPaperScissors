const prompt = require('prompt-sync')({ sigint: true });

let userScore = 0;
let computerScore = 0;
let userChoice = -1;
let computerChoice = -1;
let exit = false;
let exitPlay = false;

const printCommands = () => {
    console.log("The game accepts the following commands:")
    console.log("start          -   start a new game")
    console.log("score          -   check your score")
    console.log("exit           -   stop the game")
    console.log("help           -   display list of possible commands again")
    console.log("When in game: ")
    console.log("rock or r      -   choose rock")
    console.log("paper or p     -   choose paper")
    console.log("scissors or s  -   choose scissors")
}

const results = (u, c) => {
    if (u === c) {
        console.log("Tie!");
    }
    else if ((u === 0 && c === 2) || (u === 1 && c === 0) || (u === 2 && c === 1)) {
        console.log("You won!");
        userScore++;
    }
    else {
        console.log("You lost!");
        computerScore++;
    }
    console.log("Do you want to start a new game? y or n");
    let userInput = prompt('');
    if (userInput === 'n') {
        console.log('Please enter one of the commands: ');
        exitPlay = true;
    } else {
        console.log('Please select rock(r), paper(p) or scissors(s): ');
    }

}

const newGame = () => {
    console.log('Please select rock(r), paper(p) or scissors(s): ');
    
    while (!exitPlay) {
        let userInput = prompt('');

        computerChoice = Math.floor(Math.random() * 3);

        if (userInput === 'exit') {
            console.log('Bye!');
            exitPlay = true;
            exit = true;
        }  else if (userInput === 'score') {
            console.log(`Your score is: ${userScore}, computer: ${computerScore}.`);
        }   else if (userInput === 'help') {
            printCommands();
        } else if (userInput === 'r' || userInput === 'rock') {
            userChoice = 0;
            console.log(`You chose rock`);
            results(userChoice, computerChoice);
        } else if (userInput === 'p' || userInput === 'paper') {
            userChoice = 1;
            console.log(`You chose paper`);
            results(userChoice, computerChoice);
        } else if (userInput === 's' || userInput === 'scissors') {
            userChoice = 2;
            console.log(`You chose scissors`);
            results(userChoice, computerChoice);
        } else {
            console.log('Please select rock(r), paper(p) or scissors(s): ');
        }
    }
    
}

const startGame = () => {
    console.log("Welcome to Rock Paper Scissors Game!")
    printCommands();
    console.log("Have fun!")

    console.log('Please enter one of the commands: ');

    while (!exit) {
        let userInput = prompt('');

        if (userInput === 'exit') {
            console.log('Bye!');
            exit = true;
        } else if (userInput === 'start') {
            exitPlay = false;
            newGame();
        } else if (userInput === 'score') {
            console.log(`Your score is: ${userScore}, computer: ${computerScore}. `);
            console.log('Please enter one of the commands: ');
        } else if (userInput === 'help') {
            printCommands();
        } else {
            console.log('Please enter one of the commands: ');
        }
    }
}

startGame();
