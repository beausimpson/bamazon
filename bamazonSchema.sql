
/* deletes database if exits */
DROP DATABASE IF EXISTS bamazon;

/* creates database */
CREATE DATABASE bamazon;

/* use database */
USE bamazon;

/* creates table and columns */
CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(50),
price INTEGER(10),
stock_quantity INTEGER(10),
PRIMARY KEY (item_id)
);

/* selects all from table */
SELECT * FROM products;