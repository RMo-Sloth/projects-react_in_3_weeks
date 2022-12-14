# useEffect
<!-- Time: 15 min -->
This lab will help us get ready to read Ajax data from a server.

1. Edit Menu.js. Notice that the code we provided to you has a useEffect. Take a minute to study it.
```JavaScript
useEffect(() => {
  fetch(`/api/menuItems`)
    .then(res => res.json())
    .then(items => setMenuItems(items))
}, []);
```
Now that we've talked about it, you know that it is there so the fetch will be made __only__ the first time this component is loaded. 
 
## Order
2. In Order.js, we're getting the orderId from a route parameter. Let's add a useEffect similar to the one in App.js to get the one order from our API server.

3. Edit Order.js. Add this inside the function.
```JavaScript
  useEffect(() => {
    getOrder(orderId)
    getMenuItems()
  }, [orderId]);
```
You'll also need to
```JavaScript
import {useEffect} from 'react';
import { getOrder, getMenuItems } from './utilities';
```

4. Run and test this route with a hardcoded orderId in the url. Look in the network tab in the developer tools to see your Ajax request. (If you need to find some valid order IDs, you can always visit http://localhost:3008/orders)

## Orders
Alright, let's do one more. Let's read some orders.

6. Edit Orders.js. Add this code just inside the function.
```JavaScript
useEffect(() => {
    getOrders();
}, []);
```
Don't forget your imports like before. useEffect comes from react. getOrders comes from './utilities.js'.

7. Run and test by navigating to the `http://localhost:3000/orders` route and looking in the devtools network tab. It should be getting back some orders.


A note on [exhaustive dependencies](/cheatsheet.md/exhaustive-dependencies).