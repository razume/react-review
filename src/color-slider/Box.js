import React from 'react';

export default function Box(props) {
  return (
    <div className="box container">
      <div
        className="box"
        style={{
          backgroundColor: `rgb(${props.color.red},${props.color.green},${props.color.blue})`
        }}
      ></div>
    </div>
  );
}
