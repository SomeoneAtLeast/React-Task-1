import React from 'react';

const QuantityChanger = ({ beersOnPage, setBeersOnPage }) => {
  console.log(beersOnPage);
  return (
    <select onChange={(e) => setBeersOnPage(e.target.value)}>
      <option value='3'>3</option>
      <option value='5'>5</option>
      <option value='10'>10</option>
      <option value='20'>20</option>
      <option value='50'>50</option>
      <option value='80'>80</option>
    </select>
  );
};

export default QuantityChanger;
