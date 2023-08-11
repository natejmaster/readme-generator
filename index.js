// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use of your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use of your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which License did you use for your application?',
        choices: ['MIT', 'Apache', 'GPL', 'ISC'],
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'Provide the names of any contributors who worked on this project with you (if this was an independent project, leave this blank)'
    },
    {
        type: 'input',
        name: 'assets',
        message: 'Provide the names of any third-party assets you need to give credit to',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide directions for any testing of the project or application that need to be completed'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { license, projectTitle, descriptionWhat, descriptionWhy, installation, usage, collaborators, assets, tests, username, email } = data;
    const licenseBadge = `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    const readmeContent = `# ${projectTitle}
    
${licenseBadge}
    
## Description
${descriptionWhat}
${descriptionWhy}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
${installation}
    
## Usage
${usage}
    
## License
This project is covered under the ${license} license.
    
## Contributing
Other developers who collaborated with me on this project: ${collaborators}
Outside assets I used on this project: ${assets}
    
## Tests
${tests}
    
## Questions
Do you still have questions or further inquiries? Reach out to me on GitHub at http://github.com/${username} or e-mail me at ${email}
`;
    fs.writeFileSync(fileName, readmeContent);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README-Template.md', data);
            console.log('README file generated successfully.');
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
}

// Function call to initialize app
init();