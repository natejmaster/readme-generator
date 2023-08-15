// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection }= require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'descriptionWhat',
        message: 'What does your project do, or in other words, what problem does your project solve?',
    },
    {
        type: 'input',
        name: 'descriptionWhy',
        message: 'What was your motivation in this project? Why did you build it?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use of your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which License did you use for your application?',
        choices: ['MIT', 'Apache-2.0', 'GPL', 'ISC', 'No License'],
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'Provide the names of any contributors who worked on this project with you (if this was an independent project, leave this blank):'
    },
    {
        type: 'input',
        name: 'assets',
        message: 'Provide the names of any third-party assets you need to give credit to:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide directions for any testing of the project or application that need to be completed:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, markdownContent) {
    fs.writeFileSync(fileName, markdownContent);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            data.licenseURL = renderLicenseLink(data.license);
            data.licenseBadge = renderLicenseBadge(data.license);
            data.licenseText = renderLicenseSection(data.license);
            const markdownContent = generateMarkdown(data);
            writeToFile('README-Template.md', markdownContent);
            console.log('README file generated successfully.');
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
}

// Function call to initialize app
init();