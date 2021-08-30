import React from 'react';
import './LinkButton.scss';

const LinkButton = ({ btnText, func, disabled }) => {
  let classNames = 'link-btn';

  if (disabled) classNames += ' link-btn--disabled';

  return (
    <a href='#' className={classNames} onClick={() => func()}>
      {btnText}
    </a>
  );
};

export default LinkButton;
