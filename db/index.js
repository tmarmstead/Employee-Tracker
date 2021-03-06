const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }


    viewAllDepartments() {
        return this.connection.query(
            `
            SELECT
                department.id,
                department.name
            FROM
                department
            ORDER BY
                department.id
            `
        )
    }

    viewAllRoles() {
        return this.connection.query(
            `
            SELECT
                role.id,
                role.title,
                role.salary,
                department.name AS department
            FROM
                role
            LEFT JOIN
                department ON role.department_id = department.id
            ORDER BY 
                role.id
            `
        )
    }

    viewAllEmployees(){
        return this.connection.query(
            `
            SELECT 
                employee.id,
                employee.first_name,
                employee.last_name,
                role.title,
                department.name,
                role.salary, 
                employee.manager_id
            FROM employee
            JOIN role 
            ON employee.role_id = role.id
            JOIN department 
            ON role.department_id = department.id
            ORDER BY employee.id
            `
        )
    }

    addRole(role) {
        return this.connection.query(
            `
            INSERT INTO 
                role 
            SET ?
            `, role  
        )
    }

    addDepartment(department) {
        return this.connection.query(
            `
            INSERT INTO 
                department
            SET ?
        `, department
        )
    }

    addEmployee(employee){
        return this.connection.query(
        `
        INSERT INTO
            employee
        SET ?
        `, employee
        )}

    updateEmployeeRoles(newEmployeeRole){
        return this.connection.query(
        `
        UPDATE 
            employee 
        SET ?
        `, newEmployeeRole
        )
    }

}

module.exports = new DB(connection);