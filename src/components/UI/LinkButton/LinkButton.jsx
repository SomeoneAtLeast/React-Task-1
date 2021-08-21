import React from 'react';
import './LinkButton.scss';

const LinkButton = ({ btnText, func }) => {
  return (
    <a href='#123' className='link-btn' onClick={() => func()}>
      {btnText}
    </a>
  );
};

export default LinkButton;
