import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const X = ({ onClick }) => {
  const [color, setColor] = useState(
    'white'
  );
  const [
    fontColor,
    setFontColor,
  ] = useState('black');
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border: 'none',
      }}
      onMouseEnter={() => {
        setColor('red');
        setFontColor('white');
      }}
      onMouseLeave={() => {
        setColor('white');
        setFontColor('black');
      }}
    >
      <FontAwesomeIcon
        icon="times"
        style={{
          fontSize: '2em',
          color: fontColor,
          background: 'none',
        }}
      ></FontAwesomeIcon>
    </button>
  );
};
