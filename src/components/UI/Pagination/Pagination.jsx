import React from 'react';
import './pagination.scss';

import LinkButton from '../LinkButton';
import QuantityChanger from '../QuantityChanger';

const Pagination = ({ setPage, page, beers, beersOnPage, setBeersOnPage }) => {
  const changePage = (event, changeFunc, page, direction) => {
    event.preventDefault();
    if (page > 1 && direction === 'back') changeFunc(--page);
    if (direction === 'next' && beers.length === beersOnPage)
      changeFunc(++page);
  };

  return (
    <div className='pagination'>
      <div className='pagination__page-changer'>
        <LinkButton
          btnText='Назад'
          func={() => changePage(event, setPage, page, 'back')}
        />
        <span>{page}</span>
        <LinkButton
          btnText='Вперед'
          func={() => changePage(event, setPage, page, 'next')}
        />
      </div>
      <div className='pagination__beers-count-changer'>
        <QuantityChanger
          beersOnPage={beersOnPage}
          setBeersOnPage={setBeersOnPage}
        />
      </div>
    </div>
  );
};

export default Pagination;
