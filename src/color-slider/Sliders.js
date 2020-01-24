import React from 'react';

export default function Sliders(props) {
  return (
    <div className="sliders-container">
      <h4>red value: {props.color.red}</h4>
      <input
        type="range"
        min="0"
        max="255"
        className="red"
        value={props.color.red}
        onChange={props.handleChange}
      />
      <h4>green value: {props.color.green}</h4>
      <input
        type="range"
        min="0"
        max="255"
        className="green"
        value={props.color.green}
        onChange={props.handleChange}
      />
      <h4>blue value: {props.color.blue}</h4>
      <input
        type="range"
        min="0"
        max="255"
        className="blue"
        value={props.color.blue}
        onChange={props.handleChange}
      />
    </div>
  );
}
