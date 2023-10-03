const { default: inquirer } = require("inquirer");

function viewDepartments() {
  connection.query("SELECT * FROM departments", (err, results) => {
    if (err) throw err;
    console.table(results);
    startApp();
  });
}

function viewRoles() {
  connection.query("SELECT * FROM roles", (err, results) => {
    if (err) throw err;
    console.table(results);
    startApp();
  });
}

function viewEmployees() {
  connection.query("SELECT * FROM employees", (err, results) => {
    if (err) throw err;
    console.table(results);
    startApp();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the name of the department:",
        name: "department_name",
      },
    ])
    .then((data) => {
      connection.query(
        "INSERT INTO departments (department_name) VALUES (?)",
        [data.department_name],
        (err, results) => {
          if (err) throw err;
          console.log("Department added successfully!");
          viewDepartments();
          startApp();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the new role?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the salary of the new role?",
        name: "salary",
      },
      {
        type: "input",
        message: "What is the department id?",
        id: "department_id",
      },
    ])
    .then((data) => {
      connection.query(
        "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
        [data.title, data.salary, data.department_id],
        (err, results) => {
          if (err) throw err;
          console.log("Role added successfully!");
          viewRoles();
          startApp();
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name of the new employee?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What is the last name of the new employee?",
        name: "last_name",
      },
      {
        type: "input",
        message: "What is the employee's role id?",
        id: "role_id",
      },
      {
        type: "input",
        message: "What is the employee's manager's id?",
        id: "manager_id",
      },
    ])
    .then((data) => {
      connection.query(
        "INSERT INTO employees (first_name, last_name, role_id, manager_id VALUES (?, ?, ?, ?)",
        [data.first_name, data.last_name, data.role_id, data.manager_id],
        (err, results) => {
          if (err) throw err;
          console.log("New employee added successfully!");
          viewEmployees();
          startApp();
        }
      );
    });
}

function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the id of the employee?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employee's new role id?",
        name: "role_id",
      },
    ])
    .then((data) => {
      connection.query(
        `SELECT id FROM employees WHERE id = ?`,
        [data.id],
        (err, results) => {
          connection.query(
            `UPDATE employee SET role_id = ? WHERE id = ?;`,
            [data.role_id],
            (err, results) => {
              if (err) throw err;
              console.log("Employee role updated successfully!");
              viewEmployees();
              startApp();
            }
          );
        }
      );
    });
}
