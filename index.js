const inquirer = require ("inquirer")
const HtmlCreate = require("./Develop/lib/HtmlCreate");

//required

let employeeType = {};
employeeType ["Engineer"] = require("./Develop/lib/Engineer");
employeeType ["Intern"] = require("./Develop/lib/Intern");
employeeType ['Manager'] = require("./Develop/lib/Manager");
//const Employee = require("./Develop/lib/Employee");

const employees = [];


 function getNextCard(){
     console.log("")
    return inquirer.prompt(
        {    
            type: 'list',
            name: 'Role',
            message: "What is the employee's Role?",
            choices: [
                "Manager", 
                "Engineer", 
                "Intern", 
                "No More Employees to Add, Select Here To Finish"
              ]
        }    
    ).then(answer =>{
            console.log(answer.Role);
            if(answer.Role in employeeType){
                employee = new employeeType[ answer.Role ];
                employee.Inquirer().then( x => { 
                    employees.push(employee);
                    getNextCard();
                    //console.log(employees); 
                } );           
            } else {
            
                //builds HTML HERE
                HtmlCreate(employees);
                //console.log ("Got here88888****************************************")
                //console.log(employees)
                            
            }
            
        });
}

getNextCard();




