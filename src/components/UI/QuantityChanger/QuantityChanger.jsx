import React from 'react';
import './QuantityChanger.scss';

const QuantityChanger = ({ beersOnPage, setBeersOnPage }) => {
  return (
    <select
      className='quantity-changer'
      value={beersOnPage}
      onChange={(e) => setBeersOnPage(+e.target.value)}
    >
      <option value={3}>3</option>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={30}>50</option>
      <option value={40}>80</option>
    </select>
  );
};

export default QuantityChanger;
