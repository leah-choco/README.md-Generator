const renderLicenseLink = (license) => {
 if (license === 'Apache 2.0'){
  return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
 }
 if(license === "MIT"){
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
 }
 if (license === "ISC"){
  return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
 }
 if(license === "none"){
  return "No license"
 }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # **${data.title}**

  Click the badge to be taken to the information about the chosen license.
  
  ${renderLicenseLink(data.licenseType)}

  ## Table of Contents

  [Description](#Description)

  [Installation](#Installation)

  [Usage](#Usage)

  [Contributing](#Contributing)

  [Tests](#Tests)

  [License](#License)

  [Questions](#Questions)


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  
  Click the badge at the top of the README.md to go to the information about the chosen license. 
  
  ${data.licenseType}

  ## Questions

  If you have any questions, click my Github profile name or email me.
  
  [${data.questions}](https://github.com/${data.questions})

  ${data.email}

`;
}

module.exports = generateMarkdown;
