const inquirer = require('inquirer');
const fs = require('fs');
const fileGenerator = require("./fileGenerator");

const promptUser = () => {
    return inquirer.prompt([
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
        },
    ]);
};

const init = () => {
    promptUser()
        .then((answers) => fs.writeFileSync('README_GENERATOR.md', fileGenerator(answers)))
        .then(() => console.log('Success!'))
        .catch((err) => console.log(err));
};
init();