const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please provide your name",
    },
    {
        type: 'input',
        name: 'id',
        message: "Please provide your ID"
    }
]