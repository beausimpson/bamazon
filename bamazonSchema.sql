DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(50),
price INTEGER(10),
stock_quantity INTEGER(10),
PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("LED Light Bulb","Home Improvement",2.99,100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Black Tube Socks","Clothing",6.50,50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Easy Rider DVD","Movies",15,13);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Beastie Boys Book","Books",25,50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("iPhone Charging Cord","Electronics",5,40);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Black Ink Pens","Office Supplies",12.79,35);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Thank You Cards with Envelopes","Office Supplies",11.25,50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("White T-Shirts 5-Pack","Clothing",7.89,17);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Fleece Blanket","Bedding",22,70);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Burt's Bees Lip Balm","Beauty Supplies",6.65,23);

SELECT * FROM products;