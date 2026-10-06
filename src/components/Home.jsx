import { useMemo, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const products = ["Laptop", "Mobile", "Tablet", "Headphones"];

  const filteredProducts = useMemo(() => {
    console.log("Filtering...");
    
    return products.filter(product =>
      product.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search product"
      />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      {filteredProducts.map(product => (
        <p key={product}>{product}</p>
      ))}
    </>
  );
}

export default App;