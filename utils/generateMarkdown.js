// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# **${data.title}**

  ${data.badge}

  [Description] (#Description)
  [Installation] (#Installation)
  [Usage](#Usage)
  [Contributing] (#Contributing)
  [Tests] (#Tests)
  [License] (#License)
  [Questions] (#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## License
  ${data.license}

  ## Questions
  ${data.questions}
  ${data.email}

`;
}

module.exports = generateMarkdown;