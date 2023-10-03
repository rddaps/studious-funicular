INSERT INTO departments (department_name)
VALUES ("Sales"),
    ("Marketing"),
    ("Operations"),
    ("Legal"),
    ("Technology");

INSERT INTO roles (title, salary, department_id)
VALUES ("Design Officer", 72945, 1),
("Marketing Manager", 68387, 2),
("Assistant", 56540, 4),
("Data Coordinator", 71252, 5),
("VP Sales", 98253, 1),
("Software Consultant", 57210, 3),
("Financial Advisor", 63595, 2),
("Structural Engineer", 63137, 5),
("Payment Coordinator", 71851, 3),
("Sr Accountant", 60307, 1);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Celle", "Fitzroy", 1, 4),
("Suzann", "Loud", 2, 4),
("Zachariah", "Gillicuddy", 3, 4),
("Mae", "Roubeix", 4, NULL),
("Flora", "Cisneros", 5, 7),
("Mildrid", "Ballendine", 6, 7),
("Beverie", "Melson", 7, NULL),
("Lorrie", "Blackman", 8, 11),
("Jack", "D'Antoni", 9, 11),
("Chico", "Startin", 10, 11),
("Prince", "Jinks", 5, NULL),
("Clarence", "Kivlehan", 2, 14),
("Brandtr", "Hardwell", 3, 14),
("Dennie", "Pyne", 2, NULL),
("Ramona", "Bullivent", 10, NULL),
("Tiffy", "Matten", 10, NULL);
