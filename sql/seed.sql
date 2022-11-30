USE employees_db;

INSERT INTO department (name)
VALUES ('Sales');
INSERT INTO department (name)
VALUES ('Finance');
INSERT INTO department (name)
VALUES ('Engineering');
INSERT INTO department (name)
VALUES ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES 
('Sales Lead', 60000, 1);
('Accountant', 100000, 2);
('Lead Engineer', 120000, 3);
('Software Engineer', 80000, 3);
('Legal Team Lead', 160000, 4);
('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Ben', 'Smith', 1, NULL);
('Anna', 'Smith', 2, NULL);
('Abby', 'Van Sice', 3, NULL);
('Brett', 'Cooper', 4, 4);
('Steve', 'Blocks', 4, 1);
('Micheal', 'Perin', 4, 2);
('Emma', 'Cain', 5, 2);
('Rock', 'Lee', 6, 1);
