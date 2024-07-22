// Cart.js

import React, { useState } from 'react';
//import './Cart.css'; // Import CSS file for Cart component

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <ul className="CartItems">
        {cartItems.map((item, index) => (
          <li key={index} className="CartItem">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
