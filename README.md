# React in 3 Weeks
<!-- TODO: RAP testing is JS Testing -> Angular Testing. And JS Testing -> React Testing -> RN Testing
TODO: RAP Renumber the links in Agenda.md and make sure they work
TODO: Define the Orders filter criteria below
TODO: Add the completed app to github and allow users to test out the app. -->

Resources to support @RapPayne's O'Reilly course.

In this course we'll learn together to create a simple React application.

## Agenda
Here's what we'll be doing together: [The Agenda](Agenda.md)

## Labs
We'll be creating a fairly full-featured application that will allow diners to order meals at a restaurant. They can browse through the menu, add food to their cart, and check out. Waiters can place an order for their customers. The diners could mark the order for delivery.

## The pages/views

### Menu view
Browse the food which is in categories. 
Call the waiter to your table.
From here you can add to the cart.

### Cart view
See what's in the cart, remove items, add special notes like "extra soy sauce" or "no onions".
Assign each item to a person.
When do you want it ready? Enter a time. 
See the order total. Leave a tip.
Enter CC info.
Place order button. Submits the order and forwards to the Order view.

### Order
The details of a single order. Read only.
Serves as the receipt.

### Orders
Filter orders by some criteria.
A logged in user can see their own orders. An admin user can see all orders.

### Register
Create an account on our site.
Also to modify user data.

### Login
Authenticate to the system. Writes to local storage for persisting a login token.

<!-- You can give it a test drive here.  -->

Copyright &copy; 2022 Agile Gadgets LLC. 
All rights reserved. You may not republish or copy any part of this repository except for your own personal learning. If you want to use this as courseware for a React course, contact [@RapPayne](http://github.com/RapPayne) to obtain a license. 