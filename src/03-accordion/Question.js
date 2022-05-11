import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import classes from './Question.module.css';

function Question(props) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className={classes.question}>
      <header>
        <h4>{props.title}</h4>
        <button className={classes.btn} onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{props.info}</p>}
    </article>
  );
}

export default Question;
