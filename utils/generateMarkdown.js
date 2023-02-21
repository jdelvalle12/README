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
function generateMarkdown (data) {

return `# Title

${data.title}\n

## Description

${data.description}\n

## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Test](#tests)
* [License](#license)
* [GitHub](#github)
* [Email Address](#emailaddress)

## Installation

${data.installation}\n

## Usage

${data.usage}\n

## License

${renderLicenseBadge(data.license)}\n

## Badges

![${data.badges}](https://img.shields.io/github/license/top/${data.github}/${data.badges})

## Contribute

${data.contributions}\n 

## Test

${data.test}\n

### Contact

GitHub: https://github.com/${data.github}
Email Address: ${data.email}\n`;

};

module.exports = generateMarkdown;