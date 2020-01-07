console.log ("hello");
const inquirer = require ("inquirer")

//required
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const Employee = require("./lib/Employee")

inquire
.prompt([
    {    
        type: 'input',
        name: 'empName',
        message: "What is the employee name?",
    },
    {
        type: 'input'
        name: 'email'
        message: "What is the employee's email?"
    }
    
    
    
    
    
    
]).then(answers =>{
        checkGuess(answers.answers);
        console.log(answers.answers);
    }).catch
