import React from 'react';
import './BeerSearch.scss';

import Input from '../UI/Input';

const BeerSearch = ({ beerName, setBeerName }) => {
  return (
    <form className='beer-search'>
      <h3>Beer Search</h3>
      <Input
        name={'name'}
        value={beerName.name}
        func={setBeerName}
        placeholder='Beer name'
      />
    </form>
  );
};

export default BeerSearch;
