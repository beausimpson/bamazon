# bamazon Node App
**Built by Beau Simpson**

**This Node based app was built using the following Node packages:**
- Inquirer
- MySql
- console.table

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
- Ask if custmoer would like to continue, which resets or exits the program

![Image of bamazon customer third example](https://s3.amazonaws.com/simpson/markdown_images/bamazon/bamazon_customer_three.jpg)



### Manager View
**Enter `node bamazonCustomer.js` to run program**
* Select from a list of menu options:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product