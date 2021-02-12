// Dependencies
const inquirer = require('inquirer');
// const { addDepartment } = require('./db');
const db = require('./db');
require('console.table');

// Main Menu Inquirer Prompted Question
function mainMenu(){
    inquirer.prompt([
        {
            type:'rawlist',
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
// Switch Statemet to execute functions based on commandline choices
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

// Functions for viewing each category (depts, roles, employees)
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

// Functions for adding each category (depts, roles, employees)
async function addDepartment() {
    const departments = await db.viewAllDepartments();
    // const departmentChoices = departments.map(({ id, name }) => ({
    //     name: name,
    //     value: id}) )
//    ;
    const department = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Department?'
        },
        
    ]);
    await db.addDepartment(department);
    console.log(`Added ${department.name} to the database`);
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
            message: 'What is the name of the role?'
        }, 
        {
            type: 'input',
            name: 'salary',
            message: 'what is the salary of the role?'
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'To which department does this role belong?',
            choices: departmentChoices 
        }
    ]);
    await db.addRole(role);
    console.log(`Added ${role.title} to the database`);
    mainMenu();
}


async function addEmployee() {
    const roles = await db.viewAllRoles();
    const roleChoices = roles.map(({ id, title }) => ({
        title: title,
        value: title
    }));
    const employee = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the employees First Name?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'what is the employees Last Name?'
        },
        {
            type: 'list',
            name: 'fk_role',
            message: 'What is your role?',
            choices: roleChoices
        }
    ]);
    await db.addRole(employee);
    console.log(`Added ${employee.title} to the database`);
    mainMenu();
}

// Functions for Updating Employee Roles


mainMenu();