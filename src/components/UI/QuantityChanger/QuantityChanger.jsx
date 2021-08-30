import React from 'react';

const QuantityChanger = ({ beersOnPage, setBeersOnPage }) => {
  const onChangeBeersOnPage = (event, beersOnPage) => {
    if (event.target.value === beersOnPage) return;
    setBeersOnPage(+event.target.value);
  };

  return (
    <select
      className='quantity-changer'
      value={beersOnPage}
      onChange={(event) => onChangeBeersOnPage(event, beersOnPage)}
    >
      <option value={4}>4</option>
      <option value={6}>6</option>
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={50}>50</option>
      <option value={80}>80</option>
    </select>
  );
};

export default QuantityChanger;
