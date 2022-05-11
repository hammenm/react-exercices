import React, { useState } from 'react';

import classes from './ColorViewer.module.css';

function ColorViewer() {
  const [text, setText] = useState('');
  const [colors, setColors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setColors([...colors, text]);
    setText('');
  };

  return (
    <>
      <h2>Color viewer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {colors.map((color, idx) => (
        <div key={idx} className={classes.box} style={{ backgroundColor: color }} />
      ))}
    </>
  );
}

export default ColorViewer;
