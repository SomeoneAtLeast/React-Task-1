import React from 'react';

import spinnerImg from './spinner.svg';

const Spinner = () => {
  return (
    <div>
      <img src={spinnerImg} alt='Загрузка' />
    </div>
  );
};

export default Spinner;
