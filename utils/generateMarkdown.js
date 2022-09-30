// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = () => {
  var badgeType = ""

  switch (badgeType) {
    case "MIT":
      badgeType = "MIT-BLUE.svg"
    break;
    case "Apache 2.0":
      badgeType = ""
    break;
    case "Mozilla Public 2.0":
      badgeType = ""
    break;
      
  }//Add more cases for licenses
  let badge = `https://img.shields.io/badge/license-${badgeType}`;
  return badge;
}
renderLicenseBadge();
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  var licenseType = ""
  switch (license){
    case "MIT":
      licenseType = "https://choosealicense.com/licenses/mit/"
    break;
    case "Apache 2.0":
      licenseType = "https://choosealicense.com/licenses/apache-2.0/"
    break;
    case "Mozilla Public 2.0":
      licenseType = "https://choosealicense.com/licenses/mpl-2.0/"
    break;
      
  }
}
renderLicenseLink();

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # **${data.title}**

  
  ${data.badgeType}

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
  ${data.licenseType}

  ## Questions
  ${data.questions}
  
  ${data.email}

`;
}

module.exports = generateMarkdown;
