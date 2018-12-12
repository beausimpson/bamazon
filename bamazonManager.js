
// inquirer command line module
var inquirer = require("inquirer");

// mySql module
var mysql = require("mysql");

require("console.table");


// creates the connection to the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "13bs13bs!!!",
    database: "bamazon"
});
// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("\n------------- Bamazon: Manager Interface -------------\n");
    managerStart();
    // connection.end();
});


function managerStart() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Menu Options:",
                choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
                name: "managerOption"
            }
        ])
        .then(function (managerResponse) {
            // console.log(managerResponse.managerOption)
            switch (managerResponse.managerOption) {
                case "View Products for Sale":
                    listProducts();
                    break;
                case "View Low Inventory":
                    lowInventory();
                    break;
                case "Add to Inventory":
                    addInventory();
                    break;
                case "Add New Product":
                    addProduct();
                    break;
            };
        });
};

// lists all products for sale
function listProducts() {
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function (err, productResponse) {
        if (err) throw err;

        console.table(productResponse);
        stopConnection();
    });
};

// lists products with inventory less than 5, if there are any
function lowInventory() {
    connection.query("SELECT product_name FROM products WHERE stock_quantity < 5", function (err, inventoryResponse) {
            // console.log(inventoryResponse[0].product_name)
        if (inventoryResponse[0] === undefined) {
            console.log("\n------------- No items with low inventory -------------\n")
            stopConnection();
            
        } else {
            console.log("\n------------- Items with low inventory -------------\n")
            console.table(inventoryResponse)
            stopConnection();
        }
    })
};

// function ask if manager would like to exit or continue
function stopConnection() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to Continue?",
            name: "confirm",
            default: true
        }
    ]).then(function (stopResponse) {
        if (stopResponse.confirm) {
            managerStart();
        }
        else {
            console.log("\n------------- Thank You for using the Bamazon manager interface. -------------\n");
            connection.end();
        }
    })
};
