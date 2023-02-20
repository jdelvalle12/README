// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(MIT) {
  return MIT;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
  return ;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
  return;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown (answer) {
  return `# Title
${answer.title}\n

## Description

${answer.description}\n

## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Test](#tests)
* [License](#license)
* [GitHub](#github)
* [Email Address](#emailaddress)

## Installation

${answer.installation}\n

## Usage

${answer.usage}\n

## License

${answer.licenses}\n

## Badges

![${answer.badges}](https://img.shields.io/github/license/top/${answer.github}/${answer.badges})

## Contribute

${answer.contributions}\n 

## Test

${answer.test}\n

### Contact

GitHub: https://github.com/${answer.github}\n
Email Address: ${answer.email}\n`;

};

module.exports = generateMarkdown();
module.exports = renderLicenseBadge();