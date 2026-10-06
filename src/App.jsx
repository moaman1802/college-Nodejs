import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Products</h1>

      <div className="product-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>

            <img
              src={product.thumbnail}
              alt={product.title}
            />

            <h2>{product.title}</h2>

            <p className="description">
              {product.description}
            </p>

            <p><b>Price:</b> ${product.price}</p>

            <p><b>Discount:</b> {product.discountPercentage}%</p>

            <p><b>Rating:</b> ⭐ {product.rating}</p>

            <p><b>Stock:</b> {product.stock}</p>

            <p><b>Category:</b> {product.category}</p>

            <p><b>Brand:</b> {product.brand}</p>

            <p className="status">
              {product.availabilityStatus}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;