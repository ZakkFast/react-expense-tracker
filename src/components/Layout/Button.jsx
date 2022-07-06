import React from 'react';
import './Button.css';

const Button = ({ btnText, onClickHandle }) => {
  return (
    <button className='btn' onClick={onClickHandle}>
      {btnText}
    </button>
  );
};

export default Button;
