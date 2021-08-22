import React from 'react';

const Input = ({ name, type, value, func }) => (
  <input
    type={type}
    value={value}
    onChange={() => func({ [name]: event.target.value })}
  />
);

export default Input;
