import React, { useState } from "react";
import "./App.css";

function App() {
  const [digits, setDigits] = useState([0,1,2,3,4,5,6,7,8,9]);
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    const updatedDigits = [...digits];

    const draggedItem = updatedDigits.splice(dragIndex, 1)[0];
    updatedDigits.splice(index, 0, draggedItem);

    setDigits(updatedDigits);
    setDragIndex(null);
  };

  return (
    <div className="container">
      <h1>Drag & Drop Digits</h1>

      <p className="description">
        Drag the boxes to reorder the digits 0–9.
      </p>

      <div className="grid">
        {digits.map((digit, index) => (
          <div
            key={digit}
            className="box"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            {digit}
          </div>
        ))}
      </div>

      <p className="tip">
        Tip: Try reordering to make <b>0123456789</b> or reverse it!
      </p>
    </div>
  );
}

export default App;