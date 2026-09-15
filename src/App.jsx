import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/product/:pid" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;