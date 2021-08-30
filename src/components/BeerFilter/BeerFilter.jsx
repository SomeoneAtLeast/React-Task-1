import React, { useState } from 'react';
import './BeerFilter.scss';

import { beerFilterModel } from '../../models/beerFilterModel';
import Input from '../UI/Input';
import Button from '../UI/Button';

const BeerFilter = ({ filters, setFilters }) => {
  const [newFilters, setNewFilters] = useState(filters);

  const setNewNumberFilters = (numberFilters) => {
    event.preventDefault();
    Object.keys(numberFilters).forEach((el) => {
      if (isNaN(numberFilters[el])) numberFilters[el] = '';
    });
    setNewFilters(numberFilters);
  };

  const onSetNewFilters = (setFiltersCb) => {
    event.preventDefault();
    const newFiltersCopy = { ...newFilters };
    Object.keys(newFiltersCopy).forEach((el) => {
      if (newFiltersCopy[el] < 0) newFiltersCopy[el] = '';
    });
    setNewFilters(newFiltersCopy);
    setFiltersCb({ ...filters, ...newFiltersCopy });
  };

  const onClearFilter = (setFiltersCb) => {
    event.preventDefault();
    const newFiltersCopy = { ...newFilters };
    Object.keys(newFiltersCopy).forEach((el) => (newFiltersCopy[el] = ''));
    setNewFilters(newFiltersCopy);
    setFiltersCb(newFiltersCopy);
  };

  return (
    <form className='beer-filter'>
      <h2 className='beer-filter__title'>Beer Filter</h2>
      <ul className='beer-filter__list'>
        {beerFilterModel.map((filter) => {
          let placeholder = null;
          if (filter.type === 'number') placeholder = 'positive numbers';
          if (filter.name === 'brewed_before' || filter.name === 'brewed_after')
            placeholder = 'mm-yyyy';
          if (filter.name === 'ids') placeholder = 'id|id';

          return (
            <li key={filter.id} className='beer-filter__list-item'>
              <label className='beer-filter__input-label'>
                <span>{filter.name}</span>
                <Input
                  name={filter.name}
                  type='text'
                  value={newFilters[filter.name]}
                  state={newFilters}
                  func={
                    filter.type === 'number'
                      ? setNewNumberFilters
                      : setNewFilters
                  }
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
