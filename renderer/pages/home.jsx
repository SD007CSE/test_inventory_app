import { useState } from 'react';


export default function HomePage() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
    setItems([...items, { name, quantity: parseInt(quantity) }]);
    setName('');
    setQuantity('');
  };

  return (
    <div className="container">
      <h1>Inventory Management</h1>
      <div className="item-list">
        {items.map((item, index) => (
          <div key={index} className="item">
            {item.name} - {item.quantity}
          </div>
        ))}
      </div>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
