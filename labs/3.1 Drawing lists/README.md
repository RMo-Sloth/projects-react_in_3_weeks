# Drawing lists
<!-- TODO: NOT YET FINISHED -->
<!-- Loop thru cart items? May save that for later.
Rap, maybe not yet because the cart is being passed into <Cart> from <App> since we're lifting the cart state up to <App>:
Loop thru cart items in <Cart>. I've marked the <section> with className="cartItem". -->


## Showing all the menu items
You've seen how we are showing one menu item on the page. But there are many items! Let's show them all by iterating them with `map()`.

1. Edit Menu.js. Find where it says this.
```JavaScript
<h1>Menu</h1>
<section id="itemsWrapper">
  <section>
    <div>
```
and change it to say this
```JavaScript
<h1>Menu</h1>
<section id="itemsWrapper">
  {menuItems.map(menuItem => <section key={menuItem.id}>
    <div>
```

2. Find the closing `</section>` line that matches your map()ped `<section>`. It should be about 12 lines below. Put a `)}` after it.
3.  Run and test. If you've got it right, you should see a whole bunch of menu items instead of just the one.

## Showing all the orders
We have the same situation in Orders.js. There's only one showing. Let's see if you can fix that with fewer instructions.

5.  Edit Orders.js. Find the `<tr>` that need to be repeated. Wrap it in a `map()` function and use expressions (hint: use curly braces) to display the orderId and orderTime.
6.  Run and test. Got those two? Cool. 
7.  Double-check that you remembered to add a `key` to the `<tr>`.
8.  Import these at the top of Orders.js
```JavaScript
import { getOrderTotal, getNumberOfDiners } from "./utilities";
```
8.  Call them like this:
```JavaScript
<td>{getOrderTotal(order)}</td>
<td>{getNumberOfDiners(order)}</td>
```
9.  Run and test. You should see something in all four columns and if you click/tap on an order, you should navigate to the Order view for that particular order.

## Order.js
If you look at Order.js, you'll see that it is gathering all the lines of the order but we're only showing placeholders in a `<tr>`. That `<tr>` should be repeated once for each orderItem in the order.

1.  Edit Order.js. Find the `<tr>` that should be repeated.
2.  Wrap it in a `map()` so that the `order?.items` can be iterated. Don't forget your key!
3.  Run and test. Make sure you can see the order items.
4.  Bonus!! While we're here, `import { getNumberOfDiners, getOrderTotal } from "./utilities";` and use expressions to display all the remaining data.


