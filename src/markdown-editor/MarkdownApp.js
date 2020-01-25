import React, { useState } from 'react';
import marked from 'marked';

export default function MarkdwonApp() {
  const [html, setHtml] = useState('');
  const handleKeyUp = e => {
    const textVal = e.target.value;
    setHtml(textVal);
  };
  const createMarkup = text => {
    return { __html: text };
  };
  return (
    <div id="markdown-app">
      <textarea
        rows="100"
        cols="150"
        className="editor"
        type="text"
        onKeyUp={handleKeyUp}
      ></textarea>
      <div
        className="display"
        dangerouslySetInnerHTML={createMarkup(html)}
      ></div>
    </div>
  );
}
