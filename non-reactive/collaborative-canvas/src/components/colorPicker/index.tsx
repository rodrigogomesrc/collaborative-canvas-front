import React, { useState } from 'react';

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'black'];

export default function ColorPicker() {

  const [selectedColor, setSelectedColor] = useState("black");

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    localStorage.setItem("currentColor", color);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {COLORS.map((color, index) => (
        <div
          key={index}
          onClick={() => handleColorClick(color)}
          style={{
            width: '30px',
            height: '30px',
            backgroundColor: color,
            marginRight: '10px',
            border: selectedColor === color ? '3px solid white' : 'none',
            cursor: 'pointer',
          }}
        />
      ))}
    </div>
  );
};

