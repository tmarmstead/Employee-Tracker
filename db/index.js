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
                employee.role_id
            FROM 
                employee
            ORDER BY
                employee.id
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
            
            `
        )
    }

    addEmployee(employee){
        return this.connection.query)
        `
        
        `
    }
}

module.exports = new DB(connection)