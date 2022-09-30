// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
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
    name: 'licenseType',
    message: 'Choose a license',
    choices: ['Apache 2.0', 'MIT', 'ISC', 'none'],
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
//const writeToFile = (fileName, data) => {
  //fs.writeFile("README.md", generateMarkdown(data), (err) =>
    //err ? console.error(err) : console.log(success)

  //);

//}

inquirer
  .prompt (questions)
  .then(function(data){
    const queryURL = `https://api.github.com/users/${data.questions}`;


    fs.writeFile("README.md", generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("README.md successfully generated!")

  );

});

// TODO: Create a function to initialize app
//const init =

// Function call to initialize app
//init();

