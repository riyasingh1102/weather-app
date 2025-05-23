import React, { useState } from 'react';
import './App.css'; // make sure you're importing your CSS

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="center-container">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 2)}>Add</button>
    </div>
  );
}

export default App;