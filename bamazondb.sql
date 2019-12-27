create database bamazonDB;
use bamazonDB;

create table products (
item_id integer not null auto_increment,
book_title varchar(100) not null,
book_author varchar(100) not null,
department_name varchar(100) not null,
price decimal (10,2),
stock_quantity integer,
primary key (item_id)
);

INSERT INTO `bamazondb`.`products` (`item_id`, `book_title`, `book_author`, `department_name`, `price`, `stock_quantity`) 
VALUES ('1', 'Life in Motion', 'Misty Copeland', 'Autobiography', '15.99', '17');
INSERT INTO `bamazondb`.`products` (`item_id`, `book_title`, `book_author`, `department_name`, `price`, `stock_quantity`) 
VALUES ('2', 'Narrativa Completa', 'Juan Jose Arreola', 'Spanish Literature', '27.95', '9');
INSERT INTO `bamazondb`.`products` (`item_id`, `book_title`, `book_author`, `department_name`, `price`, `stock_quantity`) 
VALUES ('3', 'Windows on the World', 'Kevin Zraly', 'Hobbies', '29.99', '16');
INSERT INTO `bamazondb`.`products` (`item_id`, `book_title`, `book_author`, `department_name`, `price`, `stock_quantity`) 
VALUES ('4', 'The Queen of the South', 'Arturo Perez Reverte', 'Fiction', '25.99', '21');
INSERT INTO `bamazondb`.`products` (`item_id`, `book_title`, `book_author`, `department_name`, `price`, `stock_quantity`) 
VALUES ('5', 'Stick Dog Wants a Hot Dog', 'Tom Watson', 'Children''s Fiction', '12.99', '19');
INSERT INTO `bamazondb`.`products` (`item_id`, `book_title`, `book_author`, `department_name`, `price`, `stock_quantity`) 
VALUES ('6', 'Sam Walton', 'Vance H. Trimble', 'Biography', '19.95', '5');
INSERT INTO `bamazondb`.`products` (`item_id`, `book_title`, `book_author`, `department_name`, `price`, `stock_quantity`) 
VALUES ('7', 'Life in a Medieval Castle', 'Frances Gies & Josephh Gies', 'Non Fiction', '16.99', '18');
INSERT INTO `bamazondb`.`products` (`item_id`, `book_title`, `book_author`, `department_name`, `price`, `stock_quantity`) 
VALUES ('8', 'Little Women', 'Louisa May Alcott', 'Fiction', '14.95', '12');
INSERT INTO `bamazondb`.`products` (`item_id`, `book_title`, `book_author`, `department_name`, `price`, `stock_quantity`) 
VALUES ('9', 'Frozen II The Enchanted Forest', 'Suzanne Francis', 'Fiction', '7.99', '21');
INSERT INTO `bamazondb`.`products` (`item_id`, `book_title`, `book_author`, `department_name`, `price`, `stock_quantity`) 
VALUES ('10', 'Difficult Riddles for Smart Kids', 'M. Prefontaine', 'Hobbies', '5.99', '7');



