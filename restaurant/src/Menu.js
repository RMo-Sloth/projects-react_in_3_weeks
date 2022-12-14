import { useEffect, useState } from 'react';
import { getMenuItems, toCurrency } from './utilities';
export const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch(`/api/menuItems`)
      .then(res => res.json())
      .then( setMenuItems )
  }, []);
  console.log({menuItems});
  const menuItem = menuItems?.[0] || {};

  function addToCart(menuItem) {
    console.log(`Adding ${menuItem.name} to the cart`);
  }

  return (
    <>
      <h1>Menu</h1>
      <section id="itemsWrapper">
        <section>
          <div>
            <img src={menuItem.imageUrl} alt={menuItem.name} style={{ height: 200 }} />
          </div>
          <div className="menuDetails">
            <h2>{menuItem.name}</h2>
            <p>{menuItem.description}</p>
            <p>{toCurrency(menuItem.price)}</p>
            <div>
              <button onClick={() => {addToCart(menuItem)}}>Add</button>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}