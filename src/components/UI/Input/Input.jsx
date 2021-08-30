import React from 'react';

const Input = ({ name, type, value, func, placeholder, state }) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={() => func({ ...state, [name]: event.target.value })}
  />
);

export default Input;
