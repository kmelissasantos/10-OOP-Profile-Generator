const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatedMarkdown = require('./dist/generated');

const managerQs = [
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
        name: 'officeNum',
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

const engineerQs = [
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

const internQs = [
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

]


let team = [];

function writeToFile() {
    console.log(team);
    fs.writeFile(`./dist/index.html`, generatedMarkdown(team), err => {
        if (err) {
            throw err
        };
        console.log('File has been created')
    });

};


function init() {
    inquirer.prompt(managerQs).then(function(data) {
        let managerData = new Manager (data.name, data.id, data.email, data.officeNumber)
        team.push(managerData);

        if(data.addMembers === true){
            newTeam();
        }else{
            writeToFile()
        }
       
    })
};

function newTeam() {
    inquirer.prompt(
        [
            {
                type: 'list',
                name: 'pickTeam',
                message: "Would you like to add an Engineer or Intern?",
                choices: ['Engineer', 'Intern', 'Cancel']
            }
        ]
    ).then(function(data){
        if (data.pickTeam === 'Engineer') {
            newEngineer();
        } else if (data.pickTeam === 'Intern') {
            newIntern();
        } else writeToFile();
    })
}

function newEngineer() {
    inquirer.prompt(engineerQs).then(function(data){

    let engineerData = new Engineer (data.name, data.id, data.email, data.github)
    teamList.push(engineerData);
    if(data.addMembers === true){
        newTeam();
    }else{
        writeToFile()
    }
    })
    
}

function newIntern() {
    inquirer.prompt(internQs).then(function(data){

    let internData = new Intern (data.name, data.id, data.email, data.school)
    team.push(internData);
    if(data.addMembers === true){
        newTeam();
    }else{
        writeToFile()
    }
    })
    
}

// initialize app
init(); 