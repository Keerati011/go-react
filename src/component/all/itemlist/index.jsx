import React, { useState, useEffect } from "react";

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/items');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Items List</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.ID}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.ID}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.Name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsList;
