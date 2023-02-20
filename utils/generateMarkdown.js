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
function generateMarkdown (title, description, installation, usage, contribution, license, badges, test, github, email) {
  return `# Title
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

${license}\n

## Badges

![${badges}](https://img.shields.io/github/license/top/${github}/${badges})

## Contribute

${contribution}\n 

## Test

${test}\n

### Contact

GitHub: https://github.com/${github}\n
Email Address: ${email}\n`;

};

module.exports = generateMarkdown();
module.exports = renderLicenseBadge();