import React from 'react';
import './Button.scss';

const Button = ({ btnText, func, arg }) => {
  let classNames = 'btn';

  return (
    <a href='#' className={classNames} onClick={(e) => func(e, arg)}>
      {btnText}
    </a>
  );
};

export default Button;
