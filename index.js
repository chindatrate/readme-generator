const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt(
    [
        {
            type: "input",
            message: "What is the title of your repository?",
            name: "title"
        }, {
            type: "input",
            message: "What is your project description?",
            name: "description"
        }, {
            type: "input",
            message: "What are the steps required to install your project?",
            name: "install"
        }, {
            type: "input",
            message: "Please provide usage information",
            name: "usage"
        }, {
            type: "input",
            message: "Please provide contribution guidelines",
            name: "contribution"
        }, {
            type: "input",
            message: "Please provide test information",
            name: "test"
        }, {
            type: "list",
            message: "Please select which license you would like to use",
            name: "license",
            choices: [
                "APACHE 2.0",
                "BSD 3",
                "MIT",
                "None"
            ]

        }, {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        }, {
            type: "input",
            message: "What is your email address?",
            name: "email"
        }
    ]
)

    .then(({ title, description, install, usage, contribution, test, license, github, email }) => {
        fs.writeFile('README.md',

            `# ${title}

## Description
    ${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Questions](#questions)
- [Testing](#testing)
- [License](#license)


## Installation
${install}

## Usage
${usage}

## Contribute
${contribution}

## Testing
${test}

## License
${license}

## Questions
Email: ${email}

GitHub: https://github.com/${github}


    `
        )
    })