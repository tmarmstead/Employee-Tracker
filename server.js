const inquirer = require('inquirer');
const { addDepartment } = require('./db');
const db = require('./db');
require('console.table');


function mainMenu(){
    inquirer.prompt([
        {
            type:'list',
            name: 'choice',
            message: 'What action would you like to perform?',
            choices: [
                'viewAllDepartments',
                'viewAllRoles',
                'viewAllEmployees',
                'addDepartment',
                'addRole',
                'addEmployee',
                'updateEmployeeRoles'
            ]
        }
    ]).then(res => {
        switch(res.choice) {
            case 'viewAllDepartments':
                return viewAllDepartments();
            case 'viewAllRoles':
                return viewAllRoles();
            case 'viewAllEmployees':
                return viewAllEmployees();
            case 'addDepartment':
                    return addDepartment();
            case 'addRole':
                    return addRole();
            case 'addEmployee':
                    return addEmployee();
            case 'updateEmployeeRoles':
                    return updateEmployeeRoles();
        }
    })
}

async function viewAllDepartments() {
    const departments = await db.viewAllDepartments();
    console.table(departments);
    mainMenu();
}
async function viewAllRoles() {
    const roles = await db.viewAllRoles();
    console.table(roles);
    mainMenu();
}

async function viewAllEmployees() {
    const employees = await db.viewAllEmployees();
    console.table(employees);
    mainMenu();
}



async function addRole() {
    const departments = await db.viewAllDepartments();
    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
    }));
    const role = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the title?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'what is the salary of the title?'
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'To which house do you belong?',
            choices: departmentChoices
        }
    ]);
    await db.addRole(role);
    console.log(`Added ${role.title} to the database`);
    mainMenu();
}

mainMenu();