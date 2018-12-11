
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
    console.log("\n------------- Welcome to Bamazon -------------\n");
    // connection.end();
});

function startBamazon() {

    // after the connection is made
    // all products are selected from database and displayed on screen
    connection.query("SELECT item_id, product_name, price FROM products", function (err, productResponse) {
        if (err) throw err;

        console.table(productResponse);

        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Choose by ID, which product you would like to buy:",
                    name: "productId",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
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
                var products = [];
                for (var i = 0; i < productResponse.length; i++) {
                    products.push(productResponse[i].item_id);
                };

                var idNum = parseInt(itemResponse.productId);
                if (products.includes(idNum)) {
                    connection.query("SELECT stock_quantity FROM products WHERE ?",
                        { item_id: idNum }, function (err, idResponse) {
                            if (err) throw err;

                            var buyUnits = parseInt(itemResponse.unitsToBuy);
                            var stockQuantity = idResponse[0].stock_quantity;
                            if (buyUnits > stockQuantity) {
                                console.log("Insufficient quantity!")
                                stopConnection();
                            } else {
                                var updatedQuantity = stockQuantity - buyUnits;

                                connection.query("UPDATE products SET ? WHERE ?", [
                                    {
                                        stock_quantity: updatedQuantity
                                    },
                                    {
                                        item_id: idNum
                                    }
                                ],
                                    function (err, quantityUpdate) {
                                        connection.query("SELECT price FROM products WHERE ?", { item_id: idNum }, function (err, itemPrice) {
                                            console.log("You owe $" + itemPrice[0].price * buyUnits)
                                            stopConnection();
                                        })
                                    }
                                )

                            }
                        });
                } else {
                    console.log("Sorry, that is not an actual product id")
                    stopConnection();
                }
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