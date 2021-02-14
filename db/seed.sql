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
    ('Rachel', 'Riley', 1, NULL),
    ('Bim', 'Smith', 2, 1),
    ('Eugene', 'Straus', 3, 1),
    ('Leslie', 'Rose', 4, NULL),
    ('Michael', 'Lawson', 5, 4),
    ('Diane', 'Shaw', 6, 4),
    ('Ed', 'Dunham', 7, NULL),
    ('Sierra', 'Jones', 8, 7),
    ('Luke', 'Raines', 9, 7);
    

