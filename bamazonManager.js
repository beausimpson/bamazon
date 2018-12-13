
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
});

// starts bamazon manager functions 
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

// adds inventory to selected product
function addInventory() {

    connection.query("SELECT product_name FROM products", function (err, productResponse) {

        products = []
        productResponse.forEach((product, index) => {
            products.push(product.product_name);
        });

        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which item would you like to add inventory:",
                    choices: products,
                    name: "productName",
                    pageSize: products.length
                },
                {
                    type: "input",
                    message: "How many would you like to add to inventory?",
                    name: "addQuantity",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                }
            ]).then(function (addResponse) {

                connection.query("SELECT stock_quantity FROM products WHERE ?", { product_name: addResponse.productName }, function (err, itemStock) {

                    var quantityAdd = parseInt(addResponse.addQuantity) + itemStock[0].stock_quantity;

                    connection.query("UPDATE products SET ? WHERE ?", [
                        {
                            stock_quantity: quantityAdd
                        },
                        {
                            product_name: addResponse.productName
                        }
                    ],
                        function (err, inventoryUpdate) {
                            console.log("\n------------- " + addResponse.productName + "'s inventory has been updated! -------------\n");
                            stopConnection();
                        })
                })

            });
    })

};

// function adds new product to inventory
function addProduct() {

    inquirer
        .prompt([
            {
                type: "input",
                message: "Name of Item to Add to Inventory:",
                name: "name"
            },
            {
                type: "input",
                message: "What Department should the Item be Listed?",
                name: "department"
            },
            {
                type: "input",
                message: "What is the Price of the Item?",
                name: "price"
            },
            {
                type: "input",
                message: "What is the starting stock quantity?",
                name: "stockQuantity"
            }
        ]).then(function (itemResponse) {

            connection.query("INSERT INTO products SET ?",
                {
                    product_name: itemResponse.name,
                    department_name: itemResponse.department,
                    price: itemResponse.price,
                    stock_quantity: itemResponse.stockQuantity

                }, function (err, res) {
                    if (err) throw err;
                    console.log("\n------------- " + itemResponse.name + " has been added to inventory -------------\n")
                    stopConnection();
                });
        })
};

// function asks if manager would like to exit or continue
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
