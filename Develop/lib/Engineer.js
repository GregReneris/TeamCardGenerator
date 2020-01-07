const Employee = require("./Employee");
const inquirer = require ("inquirer")


class Engineer extends Employee{
    constructor(name, id, email, github ) {
        super(name, id, email);
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }

    async Inquirer(){   
        await super.Inquirer();
        return inquirer.prompt(
            {
                type: 'input',
                name: 'github',
                message: "What is the Engineers GitHub Username?"
            }).then(answers =>{
                console.log(answers);
                this.github = answers.github;
            });
    
    }

  }
  
  module.exports = Engineer;
