// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name (first and last)?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you located? (format: city, state)',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your LinkedIn URL address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub URL address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent = `
    #${project-title}

    ## Description
    ${description}

    ## Table of Contents
    ${}

    ## Installation
    ${}

    ## Usage
    ${}

    ## License
    ${}

    ## Contributing
    ${}

    ## Tests
    ${}

    ## Questions
    ${}

    `
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
