// TODO: Include packages needed for this application
const  inquirer = require('inquirer');
const fs= require('fs');
// const utils = require('utils');
const generateMarkdown = require('./utils/generateMarkdown');

//array of questions
const questions = [
    
          {
            type: 'input',
            name: 'title',
            message: 'What is the name your project?',
          },
          {
            type: 'input',
            message: 'What is the project about?',
            name: 'description',
          },
          {
            type: 'input',
            message: 'How was it installed?',
            name: 'installation',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'What is the project used for?',
          },
          {
            type: 'input',
            name: 'contributions',
            message: 'What are the guidelines of contributions you can provide?',
          },
          {
            type: 'input',
            name: 'test',
            message: 'What are the instructions to test the project?',
          },
          {
            type: 'input',
            name: 'license',
            message: 'What licenses is the application covered under?',
            choices: ['MIT', 'Apache', 'BSD'],
          },
          {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub link?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
          },
      ];
      // Create a function to write a README file
      function writeToFile (fileName, data) {
      fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  };
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(answers => writeToFile ('README.md', generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote on README.md'))
  .catch((err) => console.error(err));
};
  
// Function call to initialize app
init();
