import React, { useState } from 'react';
import Letter from '../Letter';
import './Word.css';

function Word(props) {

  // Break props.text into letters Using the Letter component
  const Letters =
    props.word &&
    props.word.split('').map((letter, index) => {
      return (
        <Letter
          index={index}
          key={index}
          letter={letter}
          click={props.click}
        />
      );
    });

  return <React.Fragment><span className="word" data-word={props.word} onClick={() => props.showTranslation(props.word)}>{Letters}</span></React.Fragment>;
}

export default Word;
