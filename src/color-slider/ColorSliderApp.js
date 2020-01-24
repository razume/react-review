import React, { useState } from 'react';
import Sliders from './Sliders';
import Box from './Box';

const ColorSliderApp = () => {
  const [color, setColor] = useState({ red: 127, green: 127, blue: 127 });
  const handleChange = e => {
    let colorCopy = { ...color };

    e.target.className === 'red'
      ? (colorCopy.red = e.target.value)
      : e.target.className === 'green'
      ? (colorCopy.green = e.target.value)
      : (colorCopy.blue = e.target.value);

    setColor(colorCopy);
  };

  return (
    <div className="color-slider-app">
      <h3 id="slider-title">RGB Color Slider</h3>
      <Sliders color={color} handleChange={handleChange} />
      <Box color={color} />
    </div>
  );
};

export default ColorSliderApp;
