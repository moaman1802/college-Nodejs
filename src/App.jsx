
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const result = await response.json();

      setData(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>API Fetch Practical</h1>

      <div className="buttons">
        <button onClick={fetchData}>Fetch Users</button>
        <button onClick={() => alert("Button 2 clicked")}>
          Button 2
        </button>
        <button onClick={() => alert("Button 3 clicked")}>
          Button 3
        </button>
        <button onClick={() => alert("Button 4 clicked")}>
          Button 4
        </button>
      </div>

      {loading && <p>Loading data...</p>}

      {data && (
        <div>
          <h2>User List</h2>

          {data.map((user) => (
            <p key={user.id}>
              {user.id}. {user.name} - {user.email}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;