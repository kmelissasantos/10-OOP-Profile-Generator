const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please provide your name here",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you provide your name here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please provide your ID here",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you provide your ID here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide your email here",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you provide your email here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please provide your office number here",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you provide your office number here."
            }
            return true;
        }
    },
    {
        type: 'confirm',
        name: 'addMembers',
        message: "Would you like to add more members?"
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please provide your name here",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you provide your name here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please provide your ID here",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you provide your ID here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide your email here",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you provide your email here"
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please provide your github here",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you provide your github here."
            }
            return true;
        }
    },
    {
        type: 'confirm',
        name: 'addMembers',
        message: "Would you like to add more members?"
    }

]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please provide your name here",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you provide your name here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please provide your ID here",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you provide your ID here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide your email here",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you provide your email here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please provide school attended here",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you provide your school here."
            }
            return true;
        }
    },
    {
        type: 'confirm',
        name: 'addMembers',
        message: "Would you like to add more members?"
    }

],

function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, generated(data), err => {
        if (err) {
            throw err
        };
        console.log('File has been successfully created!')
    });

};

function init() {
    inquirer.prompt(managerQuestions).then(function(data) {
        let fileName = "generatedindex.html"
        if(data.addMembers === true){
            inquirer.prompt(engineerQuestions)
        } else if (data.addMembers === true) {
            inquirer.prompt(internQuestions)
        }else {
            writeToFile(fileName, data);
        }

    })
};

// initialize app
init(); 