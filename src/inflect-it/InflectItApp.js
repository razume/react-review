import React, { useState } from 'react';
import inflection from 'inflection';
import WordsList from './WordsList';

export default function InflectItApp() {
  const [words, setWords] = useState([]);

  const generateWord = (singular, plural) => {
    return { sing: singular, plur: plural };
  };
  const handleSubmit = e => {
    e.preventDefault();
    const inputText = e.target.elements[0].value;
    const singular = inflection.singularize(inputText);
    const plural = inflection.pluralize(inputText);
    const newWord = generateWord(singular, plural);
    setWords([...words, newWord]);
  };

  return (
    <div id="inflect-it-app">
      <form className="input-container" onSubmit={handleSubmit}>
        <input type="text"></input>
        <button type="submit">+</button>
      </form>
      <WordsList words={words} />
    </div>
  );
}
