import React from 'react';

const Input = ({ name, type, value, func, placeholder, newFilters }) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={() => func({ ...newFilters, [name]: event.target.value })}
  />
);

export default Input;
