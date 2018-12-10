
// inquirer command line module
var inquirer = require("inquirer");

// mySql module
var mysql = require("mysql");



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
    console.log("\n------------- You are now connected to the database! -------------\n------------- Welcome to Bamazon -------------\n");
    // connection.end();
});

function startBamazon() {
    // connectDatabase();
    // connect to the database function

    // after the connection is made
    // all products are selected from database and displayed on screen
    connection.query("SELECT * FROM products", function (err, productResponse) {
        if (err) throw err;

        var products = [];
        for (var i = 0; i < productResponse.length; i++) {
            products.push("ID#: " + productResponse[i].item_id +
                " Name: " + productResponse[i].product_name +
                " Price: $" + productResponse[i].price);
        };

        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Choose by ID, which product you would like to buy:",
                    choices: products,
                    name: "selectedProduct",
                    pageSize: productResponse.length
                },
                {
                    type: "input",
                    message: "How many many units would you like to buy?",
                    name: "unitsToBuy",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                }
            ])
            .then(function (itemResponse) {
                console.log(itemResponse.selectedProduct)
                stopConnection();
            });


    });
};

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
            startBamazon();
        }
        else {
            console.log("\n------------- Thank You for Visting Bamazon. Pleae Come again! -------------\n");
            connection.end();
        }
    })
};

startBamazon();