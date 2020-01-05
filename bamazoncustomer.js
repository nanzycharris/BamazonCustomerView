// The app requires 'mysql' and 'inquirer' packages for data input and storage
var mysql = require("mysql");
var inquirer = require("inquirer");

// Create your connection to your Bamazon MySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "pearsley03",
    database: "bamazonDB"
});

// Connect to the server and call the function to show the products in your database 
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    showProducts();
});

// Write a function to display the products in your database 
function showProducts() {
    // Select * (ALL) items from table 'products'
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Display table on terminal
        console.table(res);
        // Then ask the customer for the Item ID of the book they'd like to buy
        askForItemID(res);
    });
}

// Ask the customer for the Item ID of the book they want to buy
function askForItemID(inventory) {
    // Prompts user for what they would like to purchase
    inquirer.prompt([
        {
            type: "input",
            name: "choice",
            message: "What is the ID number of the book you would you like to buy? [Exit program by typing E]",
            validate: function (val) {
                return !isNaN(val) || val.toLowerCase() === "e";
            }
        }
    ]).then(function (val) {
        // Check if the user wants to quit the process
        checkIfExit(val.choice);
        var choiceId = parseInt(val.choice);
        var product = checkInventory(choiceId, inventory);

        // If the user types a valid ID number, ask for quantity
        if (product) {
            askForQuantity(product);
        }
        else {
            // Otherwise let them know the item is not in the inventory, and re-run showProducts
            console.log("\nThat item is not part of our inventory.");
            showProducts();
        }
    });
}

// Prompt the customer for a product quantity
function askForQuantity(product) {
    inquirer.prompt([
        {
            type: "input",
            name: "quantity",
            message: "How many copies of this title would you like to buy? [Exit program by typing E]",
            validate: function (val) {
                return val > 0 || val.toLowerCase() === "e";
            }
        }
    ]).then(function (val) {
        // Check if user wants to exit the program
        checkIfExit(val.quantity);
        var quantity = parseInt(val.quantity);
        // If there aren't enough copies of the chose title, let the user know and re-run showProducts
        if (quantity > product.stock_quantity) {
            console.log("\nNot enough copies of this title!\n");
            showProducts();
        } else {
            // Otherwise run the function buyBook, provide paramenters of product and quantity purchased
            buyBook(product, quantity);
        }
    });
}

//Write a function to update BamazonDB that writes a message of successful purchase
function buyBook(product, quantity) {
    connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [quantity, product.item_id],
        function (err, res) {
            // Let the user know the purchase was successful and run showProducts again
            console.log("\nYou successfully bought " + quantity + " copies of " + product.book_title + "!\n");
            // Let customer know the price of the product
            var totalCost = ((quantity * product.price) * 1.0825).toFixed(2);
            console.log("\nYour total cost, including taxes, is " + totalCost + "\n" + "Thank you for your purchase! Come back soon!\n");
            showProducts();
        }
    );
}

// Check to see if the chosen title it's available 
function checkInventory(choiceId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id === choiceId) {
            // If a matching product is found, return the product
            return inventory[i];
        }
    }
    // Otherwise return null
    return null;
}

// Check to see if the user wants to quit the program
function checkIfExit(choice) {
    if (choice.toLowerCase() === "e") {
        // Log a message and exit the current node process
        console.log("Thank you for checking our book selection!");
        process.exit(0);
    }
}
