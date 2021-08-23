import React from 'react';
import './Button.scss';

const Button = ({ btnText, func }) => {
  let classNames = 'btn';

  return (
    <a href='#' className={classNames} onClick={() => func()}>
      {btnText}
    </a>
  );
};

export default Button;
