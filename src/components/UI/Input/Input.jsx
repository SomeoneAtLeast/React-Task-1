import React from 'react';

const Input = ({ name, type, value, func, placeholder, state }) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={(e) => func({ ...state, [name]: e.target.value }, e)}
  />
);

export default Input;
