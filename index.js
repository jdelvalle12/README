// TODO: Include packages needed for this application


//generating README file
const  inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const questions = () => {
  inquirer
    .prompt = ([
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
            name: 'badges',
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
            name: 'email address',
            message: 'What is your email address?',
          },
    ]);
};

function writeFile (fileName, data) {

  fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
)};

// TODO: Create a function to initialize appg
function init (generateMarkdown) {
  questions().then((answers) => {
    const readMePageContent = generateMarkdown(answers);

    fs.writeFile('README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully wrote on README.md!')
    );
  }
  )};
// Function call to initialize app
init



 