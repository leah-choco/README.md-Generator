// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseType = ""

  switch (license){
    case "MIT":
      licenseType = "MIT-BLUE.svg"
  }//Add more cases for licenses
  let badge = `https://img.shields.io/badge/license-${licenseType}`;
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # **${data.title}**

  ${data.badge}

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
  ${data.license}

  ## Questions
  ${data.questions}
  
  ${data.email}

`;
}

module.exports = generateMarkdown;
