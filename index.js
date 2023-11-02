//const Employee = require("./lib/Employee"); //TODO rm
const Manager = require("./lib/Manager");
//const Engineer = require("./lib/Engineer");
//const Intern = require("./lib/Intern");
//const inquirer = require("inquirer");
//const path = require("path");
//const fs = require("fs");

//const OUTPUT_DIR = path.resolve(__dirname, "output");
//const outputPath = path.join(OUTPUT_DIR, "team.html");

//const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Inquirer

//Enter team manager details: name, id, email, **phone**

// Main Menu - add engineer, add intern, or finishg building team

// If engineer selected, get details, then go back to main menu. name, id, email, **github**

// If intern selected, get details, then go back to main menu. name, id, email, ***school**

// on exit, call render

//temporary testing

const mark = new Manager('Bob',3,'e@mail.com');

console.log(mark);
console.log(mark.getRole());