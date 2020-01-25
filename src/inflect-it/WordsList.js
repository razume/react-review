import React from 'react';

export default function Words(props) {
  return (
    <ul className="words-container">
      {props.words.map((word, idx) => {
        return (
          <li key={idx} className="word-tile">
            {word.sing} (singular)
            <br />
            {word.plur} (plural)
          </li>
        );
      })}
    </ul>
  );
}
