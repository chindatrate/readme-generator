function fileGenerator(response) {
    var content = `# ${response.title}
    
## Description
${response.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Questions](#questions)
* [Testing](#testing)
* [License](#license)

## Installation
${response.install}

## Usage
${response.usage}

## Contribute
${response.contribution}

## Testing
${response.test}

## License
${response.license}

## Questions
Email: ${response.email}

GitHub: https://github.com/${response.github}`

    return content;
};

module.exports = fileGenerator
