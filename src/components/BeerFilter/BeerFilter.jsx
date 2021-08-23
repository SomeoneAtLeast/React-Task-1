import React, { useState } from 'react';
import './BeerFilter.scss';

import { beerFilterModel } from '../../models/beerFilterModel';
import Input from '../UI/Input';
import Button from '../UI/Button';

const BeerFilter = ({ filters, setFilters }) => {
  const [newFilters, setNewFilters] = useState(filters);

  const onSetNewFilters = (setFiltersCb) => {
    event.preventDefault();
    setFiltersCb({ ...filters, ...newFilters });
  };

  const onClearFilter = (setFiltersCb) => {
    event.preventDefault();
    Object.keys(newFilters).forEach((el) => (newFilters[el] = ''));
    setFiltersCb(newFilters);
  };

  return (
    <form className='beer-filter'>
      <h2 className='beer-filter__title'>Beer Filter</h2>
      <ul className='beer-filter__list'>
        {beerFilterModel.map((filter) => {
          let placeholder = null;
          if (filter.name === 'brewed_before' || filter.name === 'brewed_after')
            placeholder = 'mm-yyyy';
          if (filter.name === 'ids') placeholder = 'id|id';
          return (
            <li key={filter.id} className='beer-filter__list-item'>
              <label className='beer-filter__input-label'>
                <span>{filter.name}</span>
                <Input
                  name={filter.name}
                  type={filter.type}
                  value={newFilters[filter.name]}
                  state={newFilters}
                  func={setNewFilters}
                  placeholder={placeholder}
                />
              </label>
            </li>
          );
        })}
      </ul>
      <div className='beer-filter__btns'>
        <Button
          btnText='Фильтровать'
          func={() => onSetNewFilters(setFilters)}
        />
        <Button btnText='Сбросить' func={() => onClearFilter(setFilters)} />
      </div>
    </form>
  );
};

export default BeerFilter;
