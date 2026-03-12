import React, { useState } from "react";
import "./App.css";

function App() {

  const [digits, setDigits] = useState([0,1,2,3,4,5,6,7,8,9]);
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDrop = (dropIndex) => {

    const updated = [...digits];
    const draggedItem = updated.splice(dragIndex, 1)[0];

    updated.splice(dropIndex, 0, draggedItem);

    setDigits(updated);
    setDragIndex(null);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">

      <h1>Drag & Drop Digits</h1>
      <p className="subtitle">Drag the boxes to reorder the digits 0-9.</p>

      <div className="grid">

        {digits.map((digit, index) => (
          <div
            key={index}
            className="box"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={allowDrop}
            onDrop={() => handleDrop(index)}
          >
            {digit}
          </div>
        ))}

      </div>

      <p className="tip">
        Tip: Try reordering to make <span>0123456789</span> or reverse it!
      </p>

    </div>
  );
}

export default App;