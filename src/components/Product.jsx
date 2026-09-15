import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { pid } = useParams();

  let product;

  switch (pid) {
    case "1":
      product = "Laptop";
      break;

    case "2":
      product = "Mobile";
      break;

    case "3":
      product = "Headphones";
      break;

    default:
      product = "Product Not Found";
  }

  return (
    <div>
      <h2>Product ID: {pid}</h2>
      <h3>Products: {product}</h3>
    </div>
  );
};

export default Product;