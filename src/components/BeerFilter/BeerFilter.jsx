import React from 'react';
import './BeerFilter.scss';

import Input from '../UI/Input';
import { beerFilterModel } from '../../models/beerFilterModel';

const BeerFilter = ({ filters, setFilters }) => {
  return (
    <form className='beer-filter'>
      <h2 className='beer-filter__title'>Beer Filter</h2>
      <ul className='beer-filter__list'>
        {beerFilterModel.map((filter) => {
          console.log(filters[filter.name]);
          return (
            <li key={filter.id} className='beer-filter__list-item'>
              <label className='beer-filter__input-label'>
                <span>{filter.name}</span>
                <Input
                  name={filter.name}
                  type={filter.type}
                  value={filters[filter.name]}
                  func={setFilters}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default BeerFilter;
