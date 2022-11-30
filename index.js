var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');


var makeConnection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  db: process.env.DB_NAME,
});

makeConnection.connect(function (err) {
    UserChoices();
  });
  
  function UserChoices() {
    inquirer
  
      .prompt({
        name: "action",
        type: "list",
        message: "which action would you like to do?",
        choices: [
          "View Employees",
          "Add an Employee",
          "Remove an Employee",
          "Add a Role",
          "Update Employees Role",
          "Quit",
        ],
      })
  
      .then(function ({ action }) {
        switch (action) {
          case "View Employees":
            viewTable();
            break;
  
          case "Add an Employee":
            addToTable();
            break;
  
          case "Remove an Employee":
            removeFromTable();
            break;
  
          case "Add a Role":
            addToTable();
            break;
  
          case "Update Employees Role":
            updateTable();
            break;
  
          case "Quit":
            makeConnection.end();
            break;
        }
      });
  }

  function insertInfo(roleResults) {
    inquirer
  
      .prompt([
        {
          type: "input",
          name: "First_name",
          message: "Enter the first Name",
        },
  
        {
          type: "input",
          name: "Last_name",
          message: "Enter the last Name",
        },
  
        {
          type: "list",
          name: "Role_id",
          message: "Select an employee Role",
          choices: roleResults,
        },
      ])
  
      .then(function (result) {
        console.log(result);
        var db = `INSERT INTO employee SET?`;
  
        makeConnection.query(
          db,
          {
            first_name: result.First_name,
            last_name: result.Last_name,
            role_id: result.Role_id,
            manager_id: result.Manager_id,
          },
  
          function (err, res) {
            console.table(res);
            UserChoices();
          }
        );
      });
  }

