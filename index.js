console.log ("hello");
const inquirer = require ("inquirer")

//required
const Engineer = require("./Develop/lib/Engineer")
const Intern = require("./Develop/lib/Intern")
const Manager = require("./Develop/lib/Manager")
const Employee = require("./Develop/lib/Employee")

inquire
.prompt([
    {    
        type: 'input',
        name: 'empName',
        message: "What is the employee name?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email?"
    }
    
    
    
    
    
    
]).then(answers =>{
        checkGuess(answers.answers);
        console.log(answers.answers);
    }).catch
