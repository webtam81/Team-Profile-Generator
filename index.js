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
        name: 'officenumber',
        message: 'Please enter office number',
        default: '0121 121 0121'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'Please enter cshool',
        default: 'school'
    }
]

function createManager() {
    managerQuestionArray = [...employeeQuestions, ...managerQuestions];
    inquirer.prompt(managerQuestionArray)
    .then((answers) => {
        let newManager = new Manager({answers})
        teamArray.push(newManager);
        console.log('The team so far: ' + teamArray);   
    })
}

function createIntern() {
    internQuestionArray = [...employeeQuestions, ...internQuestions];
    inquirer.prompt(internQuestionArray)
    .then((answers) => {
        let newIntern = new Intern({answers})
        teamArray.push(newIntern);
        console.log('The team so far: ' + teamArray);   
    })
}

function createEngineer() {
    engineerQuestionArray = [...employeeQuestions, ...engineerQuestions];
    inquirer.prompt(engineerQuestionArray)
    .then((answers) => {
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamArray.push(newEngineer);
        console.log(newEngineer)
        console.log(teamArray); 
    })
}

function startProgram() {
    inquirer
        .prompt([
            {
                type: 'message',
                name: 'welcomemsg',
                message: 'Welcome to the Team Profile Generator! Enter your manager details to get started. Press enter to continue.',
            },
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
            else if (val.mainmenu === 'Add Engineer') {
                createIntern();
            }
            else {
                endProgram();
            }
        })
}
 
function endProgram() {
    //fs.writeFile(outputPath,render(teamArray))
    console.log(teamArray);
}

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Inquirer

//Enter team manager details: name, id, email, **phone**

// Main Menu - add engineer, add intern, or finishg building team

// If engineer selected, get details, then go back to main menu. name, id, email, **github**

// If intern selected, get details, then go back to main menu. name, id, email, ***school**

// on exit, call render

//temporary testing

//const mark = new Manager('Bob',3,'e@mail.com',456456);

//console.log(mark);
//console.log(mark.getRole());

startProgram();

