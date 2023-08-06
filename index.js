// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What's the Title?\n",
    "Description?\n",
    "Installation Instructions\n",
    "Usage Information\n",
    "Contrabution Guidelines?\n",
    "Test Instructions\n"

];
 const answers=[];

function promptNextQuestion() {
    if (answers.length === questions.length) {
        // All questions have been answered, process the answers or do something with them
        console.log("All questions answered!");
        console.log("Answers:", answers);

        const formattedAnswers = answers.join('\n');
        const fileInput = new writeToFile ('README.md', formattedAnswers); // Write the answers to the file

        fileInput.writeFile();

        return;
    }

    const currentQuestion = questions[answers.length];

    inquirer.prompt([
        {
            type: 'input',
            name: 'answer',
            message: currentQuestion
        }
    ])
    .then((response) => {
        answers.push(response.answer);
        promptNextQuestion(); // Call the function recursively to prompt the next question
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    this.fileName = fileName;
    this.data = data;
    this.write = function() {
        fs.writeFile (this.fileName, this.data, (err) => {
            if (err){
                console.log("Error-Cannot write:" (err))
            } else {
                console.log(`Successful entry to ${this.filename} .`)
            }
        })
    }
}

promptNextQuestion();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();