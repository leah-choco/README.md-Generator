// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description for your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is your usage information?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are your contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are your test instructions?',
  },
  { 
    type:'rawlist',
    name: 'license',
    message: 'Choose a license',
    choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0'],
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What is your Github username?'
  },
  {
    type:'input',
    name: 'email',
    message: 'What is your email address?'
  },
]

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(filename, data, (err) =>
    err ? console.error(err) : console.log(success)

  );

}

// TODO: Create a function to initialize app
const init = async () => {
  try {
    const data = await inquirer.prompt(questions);
    writeToFile("./output/README.md", generateMarkdown(data));
  }catch (err){
    console.log(err);
  }
}

// Function call to initialize app
init();

