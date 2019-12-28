# BamazonCustomerView

This activity consists of an Amazon-like storefront that uses MySQL. The app takes in orders from customers and depletes stock from the store's inventory. 

Since this CLI application is for a bookstore, when running the application in the terminal, the app first displays a table with all of the products available for sale, including the columns for the item ID, book title, author, and department.

The app then prompts users with two messages. The first asks the user to type the ID of the product they would like to buy.
The second message asks how many units of the product they would like to buy.

Once the customer has placed the order, the application checks if the bookstore has enough of the product to meet the customer's request.

If not, the app logs the phrase "Not enough copies of this title!", and then prevents the order from going through.

However, if the bookstore does have enough of the item, the customer's order will be fulfilled.

Then our Bamazon SQL database is updated to reflect the remaining quantity. 

Once the update goes through, the customer can see the total cost of their purchase.

You can watch a demo of how the app works on the following link:
https://www.youtube.com/watch?v=3O6vHwiP6DA
