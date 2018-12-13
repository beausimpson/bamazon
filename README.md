# bamazon Node App
**Built by Beau Simpson**

**This app was built using the following:**
- JavaScript
- Node.js
- Node modules
    - Inquirer
    - MySql
    - console.table
- MySql Database

### To use the app the user must first:
- Install the required Node packages:
    - ` npm install `

- Use MySql and the following files to create database
    - `bamazonSchema.sql `
    - ` bamazonSeeds.sql `

- Enter MySql user password in ` bamazonCustomer.js ` file so that connection can be made to MySql Server

### Customer View
**Enter `node bamazonCustomer.js` to run program**

Once entered, the screen will display:

![Image of bamazon customer first example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_customer_one.jpg)

Once Id has been selected, it will ask how many units to be purchased:
![Image of bamazon customer second example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_customer_two.jpg)

After number of units to purchase has been entered; the terminal will:
- Display how many units have been purchased
- Display how much the customer owes
- Ask if customer would like to continue, which resets or exits the program

![Image of bamazon customer third example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_customer_three.jpg)

If amount of units to be purchased that is more than what is in stock:
-  It will display "Insufficient Quantity"
- Ask if customer would like to continue, which resets or exits the program

![Image of bamazon customer third example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_customer_four.jpg)

### Manager View
**Enter `node bamazonManager.js` to run program**

The Terminal will display and ask manager to:
- Select from a list of menu options:

    - View Products for Sale
    
    - View Low Inventory
    
    - Add to Inventory
    
    - Add New Product

*Example of terminal display:*
![Image of bamazon manager list of options example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_manager_one.jpg)

**View Products for Sale**

- This option will list all the products available for sale
- Ask if manager would like to continue, which resets or exits the program

*Example of View Products for Sale:*
![Image of bamazon manager view products for sale example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_manager_two.jpg)

**View Low Inventory**

- If no products have low inventory, displays message "No Items with low inventory"
- This option will list all products with an inventory of less than 5 unites
- Ask if manager would like to continue, which resets or exits the program

*Example of View Low Inventory - No items with low inventory:*
![Image of bamazon manager view low inventory example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_manager_three.jpg)

*Example of View Low Inventory - list of products with low inventory:*
![Image of bamazon manager view low inventory example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_manager_four.jpg)

**Add to Inventory**
- Lists all products, so one may be chosen to add inventory to:

*Example of Add to Inventory - List of Products*
![Image of bamazon manager add to inventory example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_manager_five.jpg)

- Asks how many units of selected product to be added to inventory

*Example of Add to Inventory - How many units to be added:*
![Image of bamazon manager add to inventory example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_manager_six.jpg)

- Displays confirmation of item being updated
- - Ask if manager would like to continue, which resets or exits the program

*Example of Add to Inventory - Inventory update confirmation:*
![Image of bamazon manager add to inventory example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_manager_seven.jpg)


**Add New Product**

1. Asks for the name of new product to be added:

*Example of Add New Products - Name of new product:*
![Image of bamazon manager add to inventory example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_manager_eight.jpg)

2. Asks for the department of the new product:

*Example of Add New Products - New product department:*
![Image of bamazon manager add to inventory example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_manager_nine.jpg)

3. Asks for the price of the new product:

*Example of Add New Products - New product price:*
![Image of bamazon manager add to inventory example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_manager_ten.jpg)

4. Asks for the starting stock quantity of the new product:

*Example of Add New Products - New product starting quantity:*
![Image of bamazon manager add to inventory example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_manager_eleven.jpg)

5. Displays confirmation of new product being added:
    - Asks if manager would like to continue, which resets or exits the program

*Example of Add New Products - New product confirmation:*
![Image of bamazon manager add to inventory example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_manager_twelve.jpg)