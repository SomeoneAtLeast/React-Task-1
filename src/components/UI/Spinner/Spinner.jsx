import React from 'react';

import spinnerImg from './Spinner.svg';

const Spinner = () => {
  return (
    <div>
      <img src={spinnerImg} alt='Загрузка' />
    </div>
  );
};

export default Spinner;
