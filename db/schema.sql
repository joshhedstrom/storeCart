DROP DATABASE IF EXISTS store_cart_db;
CREATE DATABASE store_cart_db;

USE store_cart_db;

CREATE TABLE products(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
price INTEGER(10),
stock_quantity INTEGER(10),
PRIMARY KEY (id)
);

CREATE TABLE cart(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
price INTEGER(10),
stock_quantity INTEGER(10),
PRIMARY KEY (id)
); 