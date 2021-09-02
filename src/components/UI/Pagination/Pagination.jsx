import React, { useState, useEffect } from 'react';
import './Pagination.scss';

import LinkButton from '../LinkButton';
import QuantityChanger from '../QuantityChanger';

const Pagination = ({
  setPage,
  page,
  beers,
  beersOnPage,
  setBeersOnPage,
  beerItemsLoading,
}) => {
  const [cantBack, setCantBack] = useState(false);
  const [cantNext, setCantNext] = useState(false);

  const onChangePage = (changeFunc, page, direction) => {
    event.preventDefault();
    if (page > 1 && direction === 'back' && !beerItemsLoading)
      changeFunc(page - 1);
    if (
      direction === 'next' &&
      beers.length === beersOnPage &&
      !beerItemsLoading
    )
      changeFunc(page + 1);
  };

  useEffect(() => {
    setCantBack(page === 1);
  }, [page]);

  useEffect(() => {
    if ((beers.length && beers.length !== beersOnPage) || !beers.length) {
      setCantNext(true);
    } else {
      setCantNext(false);
    }
  }, [beers.length, beersOnPage]);

  return (
    <div className='pagination'>
      <div className='pagination__page-changer'>
        <LinkButton
          btnText='Назад'
          disabled={cantBack}
          func={() => onChangePage(setPage, page, 'back')}
        />
        <span>{page}</span>
        <LinkButton
          btnText='Вперед'
          disabled={cantNext}
          func={() => onChangePage(setPage, page, 'next')}
        />
      </div>
      <div className='pagination__beers-count-changer'>
        <span className='pagination__beers-count-changer-text'>
          Показывать по
        </span>
        <QuantityChanger
          beersOnPage={beersOnPage}
          setBeersOnPage={setBeersOnPage}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default Pagination;
