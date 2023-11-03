//const Employee = require("./lib/Employee"); //TODO rm
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let teamArray = [];

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter name',
        default: 'Bob'
    }, 
    {
        type: 'input',
        name: 'id',
        message: 'Please enter employee ID',
        default: 12
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'Please enter email address',
        default: 'e@mail.com'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter github username',
        default: 'gitbob'
    }
]

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter office number',
        default: '0121 121 0121'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'Please enter school',
        default: 'school'
    }
]

function createManager() {
    managerQuestionArray = [...employeeQuestions, ...managerQuestions];
    inquirer.prompt(managerQuestionArray)
    .then((answers) => {
        let newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber
            )
        teamArray.push(newManager);
        console.log(teamArray) 
    })
    .then(runProgram);
}

function createIntern() {
    internQuestionArray = [...employeeQuestions, ...internQuestions];
    inquirer.prompt(internQuestionArray)
    .then((answers) => {
        let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamArray.push(newIntern);
        console.log(teamArray);   
    })
    .then(runProgram);
}

function createEngineer() {
    engineerQuestionArray = [...employeeQuestions, ...engineerQuestions];
    inquirer.prompt(engineerQuestionArray)
    .then((answers) => {
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamArray.push(newEngineer);
        console.log(teamArray);   
    })
    .then(runProgram);
}

function startProgram() {
    console.log(`Welcome to the Team Profile Generator!\nPlease enter the manager's details to start:`)
    createManager();
}

function runProgram() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'mainmenu',
                choices: ['Add Engineer','Add Intern','Finish Building Team'],
            }
        ])
        .then(val => {
            if (val.mainmenu === 'Add Engineer') {
                createEngineer();
            } 
            else if (val.mainmenu === 'Add Intern') {
                createIntern();
            }
            else if (val.mainmenu === 'Finish Building Team'){
                endProgram();
            }
        })
}

function endProgram() {
    team = teamArray;
    fs.writeFile(outputPath,render(team))
    console.log(teamArray);
}

startProgram();

