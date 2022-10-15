// TODO: Include packages needed for this application
const inquirer=require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'ReadMe',
        message:'Do you want to generate a ReadMe file?', 
        type: 'input'
    },
    {
         name: 'Title',
         message:'What is the title of your project?', 
         type: 'input' 
    },
    {
        name: 'Desc',
        message:'What description would you like?', 
        type: 'input' 
    },
    {
        name: 'InstallInstructions',
        message:'What are your installation instructions?', 
        type: 'input' 
    },
    {
        name: 'demo',
        message:'What is your usage information?', 
        type: 'input' 
    },
    {
        name: 'Installprocess',
        message:'What is the Installation process?', 
        type: 'input' 
    },
    {
        name: 'usability',
        message: 'What are the usages of your repository?', 
        type: 'input' 
    },
    {
        name: 'contributors',
        message:'Who contributed to your repository?', 
        type: 'input'
    },
    {
        name: 'tests',
        message:'What sort of tests have you ran?', 
        type: 'input' 
    },
    {   
        name: 'license',
        message:'What license did you use for your repository?', 
        type: 'input' 
    },
    {
        name: 'Github',
        message:'What is your GitHub Account?', 
        type: 'input'
    },    
    {
        name: 'emailaddress',
        message:'What is your email address?', 
        type: 'input'
    },    
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    return `# ${answers.Title}

    ## Description
    ${answers.Desc}
    
    ## Table of Contents
    [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [License](#license)
    [Contributing](#contributing)
    [Tests](#tests)
    [Questions?](#questions?-feel-free-to-contact-me-below!)

    ## Installation
    ${answers.InstallInstructions}
        
    ## Usage
    ${answers.usage} 
        
    ## License
    ${answers.license}
    
        
      
    ## Contributing
        
    ## Tests
       
    ## Questions? Feel free to contact me below! 
    ${answers.Github}
    ${answers.emailaddress}
        `
    
    
}

// TODO: Create a function to initialize app
function init() {
    const prompt =inquirer.createPromptModule(); // creates a inquirer prompt with the questions
    prompt(questions).then((answers) => {   //saves the information under answers
        
        if (answers.ReadMe == 'yes') {
            const userInput = writeToFile(answers)
            fs.writeFile('README.md', userInput, (err) => {
                err ? console.log(err)
                :console.log('ReadMe created')
            }) 
        } else {
            return;
        }
    })
    
 
}
// Function call to initialize app
init();

//  const readMeTemplate= `# ${answers.Title}

// ## Description
// ${answers.Desc}

// ## Table of Contents
        
// ## Installation
// ${answers.InstallInstructions}
    
// ## Usage
// ${answers.usage} 
    
// ## License
// ${answers.license}

    
  
// ## Contributing
    
// ## Tests
   
// ## Questions? Feel free to contact me Below!
// ${answers.Github}
// ${answers.emailaddress}
//     `

