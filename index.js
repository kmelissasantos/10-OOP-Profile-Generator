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
        message: "Please provide your ID",
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
        message: "Please provide your email?",
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
        message: "What is your office number?",
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