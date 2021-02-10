use department_hwDB; 

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Legal'),
    ('Accounting');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Associate', 750000, 1),
    ('Sales Exec', 500000, 1),
    ('Sales Intern', 50000, 1),
    ('Lead Attorney', 1000000, 2),
    ('Legal Reception', 1000000, 2),
    ('Leagal Aid', 60000, 2),
    ('Head Accountant', 250000, 3),
    ('Assistant', 250000, 3),
    ('Accounting Reception', 50000, 3);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES  
    ('Daenerys', 'Targaryen', 1, NULL),
    ('Rhaehgar', 'Targaryen', 2, 1),
    ('George', 'Targaryen', 3, 1),
    ('Tywin', 'Lannister', 4, NULL),
    ('Joanna', 'Lannister', 5, 4),
    ('Jamie', 'Lannister', 6, 4),
    ('Ed', 'Stark', 7, NULL),
    ('Sansa', 'Stark', 8, 7),
    ('Jon', 'Snow', 9, 7);
    

