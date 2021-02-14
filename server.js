// Dependencies
const inquirer = require('inquirer');
// const { addDepartment } = require('./db');
const db = require('./db');
require('console.table');

// Main Menu Inquirer Prompted Question
function mainMenu() {
    inquirer.prompt([
        {
            type: 'rawlist',
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
        switch (res.choice) {
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
        name: title,
        value: id
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
            message: 'What is the employees Last Name?'
        },
        {
            type: 'rawlist',
            name: 'role_id',
            message: 'What is the employees role?',
            choices: roleChoices
        }
    ]);
    console.log(employee);
    await db.addEmployee(employee);
    console.log(`Added ${employee.first_name} ${employee.last_name} to the database`);
    mainMenu();
}

// Function for Updating Employee Roles
async function updateEmployeeRoles() {
    const employees = await db.viewAllEmployees();
    const employeeChoices = employees.map(({ id, first_name }) => ({
        id: id,
        value: first_name
    }))
    const roles = await db.viewAllRoles();
    const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: title
    }));
    const newEmployeeRole = await inquirer.prompt([
        {
            type: 'rawlist',
            name: 'employee',
            message: 'Which employee would you like to update?',
            choices: employeeChoices
        },
        {
            type: 'rawlist',
            name: 'role_id',
            message: 'What is the employees role?',
            choices: roleChoices
        }
    ]);
    await db.updateEmployeeRoles(newEmployeeRole);
    console.log(`Added ${newEmployeeRole} to the database`);
    mainMenu();
}

mainMenu();