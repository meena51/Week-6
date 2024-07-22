// ProductPage.js

import React, { useState } from 'react';
import Cart from './Cart';
//import './ProductPage.css'; // Importing CSS file for ProductPage component

const ProductPage = () => {
  // Dummy data for products
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ]);

  const addToCart = (product) => {
    console.log('Added to cart:', product);
    // Implement your logic to pass product to cart component here
  };

  return (
    <div className="ProductPage">
      <h1>Product Page</h1>
      <div className="ProductList">
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="ProductItem">
              <span>{product.name}</span>
              <span>{product.price}</span>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <Cart />
    </div>
  );
};

export default ProductPage;
