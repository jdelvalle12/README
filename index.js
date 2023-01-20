// TODO: Include packages needed for this application


//generating README file
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');
const  inquirer = require('inquirer');
const generateReadMe = ({title, description, installation, usage, contributions, test, licenses, github, email}) =>

`## Title
${title}\n

## Description

${description}\n

## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Test](#tests)
* [License](#license)
* [GitHub](#github)
* [Email Address](#emailaddress)

## Installation

${installation}\n

## Usage

${usage}\n

## License

${licenses}\n

## Badges

![${badges}](https://img.shields.io/github/languages/top/${github}/${badges})

## Contribute

${contributions}\n 

## Test

${test}\n

### Contact

GitHub: https://github.com/${github}\n
Email Address: ${email}\n`;

//An array of questions for user input
inquirer
    .prompt = ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name your project?',
          },
          {
            type: 'input',
            message: 'Describe what the project is about',
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
            message: 'Provide guidelines of contributions.',
          },
          {
            type: 'input',
            name: 'test',
            message: 'Please add instructions on how to test the project',
          },
          {
            type: 'input',
            name: 'licenses',
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
          }
        ])
        .then((answer) => {
            const readMePageContent = generateReadMe(answer);
        
            fs.writeFile('README.md', readMePageContent, (err) =>
              err ? console.log(err) : console.log('Successfully created readme file!')
            );
          });



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(generateReadMe);
