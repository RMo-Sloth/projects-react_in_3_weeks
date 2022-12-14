# Forms in React
<!-- Time: 15 minutes -->

## Menu.js
1. Run the app and look at the Cart. Note that it has an item in it because of an earlier lab where we hardcoded it to have a garden salad.

2. Also notice that there are `<input>`s to put the gratuity/tip, the "deliver to" location,  and the credit card info. 

These don't save their data anywhere. Let's fix that. We'll start with the tip.

3. Edit Cart.js and create a state variable:
```JavaScript
const [tip, setTip] = useState(0);
```
4. Find the `<input>` for the tip. Make it look like this.
```JavaScript
<p>Tip: <input value={tip} onChange={e => setTip(+e.target.value)} type="number" step="0.01" /></p>
```
Hint: The `+` sign is there to convert a string to a number.

Now let's use it!

## Showing the cart totals
5. Still in Cart.js, find the `<section>` that has notes about displaying the TAX_HERE, CART_TOTAL_HERE, and GRAND_TOTAL_HERE. Make it look like this:
```JavaScript
<section>
  <p>Tax: {toCurrency(calculateTax(getCartTotal(cart)))}</p>
  <p>Total: {toCurrency(getCartTotal(cart) + calculateTax(getCartTotal(cart)))}</p>
  <p>Tip: <input value={tip} onChange={e => setTip(+e.target.value)} type="number" step="0.01" /></p>
  <p>Amount to charge: {toCurrency(getCartTotal(cart) + calculateTax(getCartTotal(cart)) + (tip || 0))}</p>
</section>
```
6. Obviously you'll need those utility functions. Add these to the top of Cart.js:
```JavaScript
import { calculateTax, getCartTotal, toCurrency, placeOrder as placeOrderToServer } from './utilities';
```
7.  Run and test. If you have it working right, you can change the tip and watch the totals change with it.

## Payment info
Here's a challenge. Try to do the same thing but for the credit card information. We'll give you less instruction this time.

8. Add state variables for `pan`, `expiryMonth`, `expiryYear`, and `cvv`. 
By the way, the 'pan' is the credit card's primary account number, the 16-digit number. The 'cvv' is the 3-digit code on the back of cards.

9. Change the `<input>` fields to handle these state variables. (Hint: you'll want to set the `value` property and the `onChange` event.)

10. Edit the `placeOrder` function. Have it console.log() these variables.

11. Run and test, making sure you can enter values and, when you click the "Place order" button, you see them in the console.

## Location
12. Last one for now. Do the same thing for `location`. Look for the 'Deliver to' textbox.

You should be a pro at it by now. So that's all the instruction you need. :-)
