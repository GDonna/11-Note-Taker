// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: "What's the Title?",
        },
        {
          type: 'input',
          name: 'description',
          message: 'Description of README?',
        },
        {
          type: 'input',
          name: 'hobby',
          message: 'What is your favorite hobby?',
        },
        {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?',
          },
          {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?',
          },
    
      ])
    
      .then((answers)=> {
        fs.writeFile('./README.md', generateMarkdown(answers) , function (err) {
            if (err) throw err;
            console.log(answers);
          });
      })

}

// Function call to initialize app
init();