import React from 'react';
import './Button.scss';

const Button = ({ btnText, func, arg }) => {
  let classNames = 'btn';

  return (
    <button className={classNames} onClick={(e) => func(e, arg)}>
      {btnText}
    </button>
  );
};

export default Button;
