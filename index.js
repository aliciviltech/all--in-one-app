#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();
while (true) {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'app',
            message: 'Which App you want to use: ',
            choices: [
                'simple-calculator',
                'BMI-calculator',
                'Number-Guessing-Game',
                'Rock-Paper-Scissors Game',
                '> exit'
            ]
        }
    ]);
    // ====================== Simple Calculator ==============================
    if (answer.app === 'simple-calculator') {
        const myCalc = await inquirer.prompt([
            {
                type: 'list',
                name: 'operator',
                message: 'select operation to be performed',
                choices: ['addition', 'subtraction', 'multiplication', 'division']
            }
        ]);
        if (myCalc.operator === 'addition') {
            console.log('\n===========================================');
            let numbers = prompt('Add Your Numbers Using "+" sign: ');
            let numbersArray = numbers.split('+');
            let sum = 0;
            for (let num of numbersArray) {
                sum = Number(num) + sum;
            }
            console.log(chalk.yellow(numbers + ' = ' + sum));
            console.log('\n===========================================\n');
        }
        else if (myCalc.operator === 'subtraction') {
            console.log('\n===========================================');
            let number1 = Number(prompt('enter first number: '));
            let number2 = Number(prompt('enter 2nd number: '));
            console.log(chalk.yellow(`differnece = ${number1} - ${number2} = ${number1 - number2} `));
            console.log('\n===========================================\n');
        }
        else if (myCalc.operator === 'multiplication') {
            console.log('\n===========================================');
            let numbers = prompt('Multiply Your Numbers Using "*" sign: ');
            let numbersArray = numbers.split('*');
            let product = 1;
            for (let num of numbersArray) {
                product = Number(num) * product;
            }
            console.log(chalk.yellow(numbers + ' = ' + product));
            console.log('\n===========================================\n');
        }
        else if (myCalc.operator === 'division') {
            console.log('\n===========================================');
            let number1 = Number(prompt('enter first number: '));
            let number2 = Number(prompt('enter 2nd number: '));
            console.log(chalk.yellow(`Quotient = ${number1} / ${number2} = ${number1 / number2} `));
            console.log('\n===========================================\n');
        }
        // ====================== BMI Calculator ==============================
    }
    else if (answer.app === 'BMI-calculator') {
        console.log('\n===========================================');
        console.log(chalk.greenBright('Welcome to BMI Calculator\n'));
        while (true) {
            let weight = Number(prompt('Enter your weight (in Kg) : '));
            let height = Number(prompt('Enter your weight (in meters) : '));
            let bmi = weight / (height * height);
            console.log(chalk.greenBright(`Your BMI = ${bmi}`));
            console.log('===========================================\n');
            const ask = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'choose',
                    message: 'Continue using this app ? or Exit ? ',
                    choices: ['continue', 'exit']
                }
            ]);
            if (ask.choose === 'continue') {
                console.log('\n===========================================');
                console.log('Welcome Again\n');
            }
            else {
                console.log(chalk.greenBright('Thanks for Using BMI Application'));
                console.log('===========================================\n');
                break;
            }
        }
        // ====================== Number Guessing Game ==============================
    }
    else if (answer.app === 'Number-Guessing-Game') {
        console.log('\n===========================================');
        console.log(chalk.greenBright('Welcome to "Number-Guessing-Game"\n'));
        while (true) {
            let randomNumber = Math.floor(Math.random() * 4 + 1);
            let userInput = Number(prompt('Guess the Number (1 ot 4) : '));
            if (randomNumber === userInput) {
                console.log(chalk.greenBright('Congrats !!!! Number Matched'));
                console.log('===========================================\n');
            }
            else {
                console.log(chalk.redBright('Sorry ! Wrong Number'));
                console.log('===========================================\n');
            }
            const ask = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'choose',
                    message: 'Try Again ? or Exit ? ',
                    choices: ['try again', 'exit']
                }
            ]);
            if (ask.choose === 'try again') {
                console.log(chalk.greenBright('\nWelcome Again\n'));
            }
            else {
                console.log(chalk.greenBright('Thanks for Using Number Guessing Game. Bye .....!'));
                console.log('===========================================\n');
                break;
            }
        }
        // ====================== Rock Paper Scissors Game ==============================
    }
    else if (answer.app === 'Rock-Paper-Scissors Game') {
        console.log(chalk.magenta('\nWelcome to the Game: "Rock Paper Scissors"'));
        console.log('=================================================\n');
        while (true) {
            const play = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'status',
                    message: 'Do You want to play or exit?',
                    choices: ['Play', 'Exit']
                }
            ]);
            if (play.status === 'Play') {
                const answer = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'choice',
                        message: 'Select an option',
                        choices: ['rock', 'paper', 'scissors']
                    }
                ]);
                let rock = chalk.yellow(`  
      _______
  ---'   ____)
        (_____)
   rock (_____)
        (____)
  ---.__(___)
`);
                let paper = chalk.greenBright(`
 _______
|       |
| paper |
|_______|
`);
                let scissors = chalk.blueBright(`  
 ()__()
   /|
  / |
 /  |
`);
                let yourChoice;
                if (answer.choice === 'rock') {
                    yourChoice = rock;
                }
                else if (answer.choice === 'paper') {
                    yourChoice = paper;
                }
                else {
                    yourChoice = scissors;
                }
                let choiceArray = [rock, paper, scissors];
                let randomChoice = Math.floor(Math.random() * 3);
                let computerChoice = choiceArray[randomChoice];
                console.log('you chose ' + yourChoice + ' and Computer chose ' + computerChoice);
                if (yourChoice === computerChoice) {
                    console.log('Its draw');
                }
                else if (yourChoice === rock) {
                    if (computerChoice === paper) {
                        console.log(chalk.bgRed('Computer Wins'));
                    }
                    else {
                        console.log(chalk.bgGreen('you win'));
                    }
                }
                else if (yourChoice === paper) {
                    if (computerChoice === scissors) {
                        console.log(chalk.bgRed('Computer Wins'));
                    }
                    else {
                        console.log(chalk.bgGreen('you win'));
                    }
                }
                else if (yourChoice === scissors) {
                    if (computerChoice === rock) {
                        console.log(chalk.bgRed('Computer Wins'));
                    }
                    else {
                        console.log(chalk.bgGreen('you win'));
                    }
                }
                else {
                    console.log('invalid input !');
                }
                console.log('=================================================');
            }
            else {
                console.log('          ****************');
                console.log(chalk.magenta('Thanks For Using The App. Good Bye .....'));
                console.log('          ****************');
                break;
            }
        }
    }
    else if (answer.app === '> exit') {
        break;
    }
}
