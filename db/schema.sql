USE k9bi6c88hk1vw8z6;

CREATE TABLE products(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
price INTEGER(10),
stock_quantity INTEGER(10),
in_cart BOOLEAN DEFAULT false,
cart_quantity INTEGER(10),
PRIMARY KEY (id)
);