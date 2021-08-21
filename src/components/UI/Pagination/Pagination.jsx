import React, { useState } from 'react';
import './Pagination.scss';

import LinkButton from '../LinkButton';
import QuantityChanger from '../QuantityChanger';
import { useEffect } from 'react/cjs/react.development';

const Pagination = ({ setPage, page, beers, beersOnPage, setBeersOnPage }) => {
  const [cantBack, setCantBack] = useState(false);
  const [cantNext, setCantNext] = useState(false);

  const changePage = (event, changeFunc, page, direction) => {
    event.preventDefault();
    if (page > 1 && direction === 'back') changeFunc(--page);
    if (direction === 'next' && beers.length === beersOnPage)
      changeFunc(++page);
  };

  useEffect(() => {
    if (page === 1) {
      setCantBack(true);
    } else {
      setCantBack(false);
    }
  }, [page]);

  useEffect(() => {
    if (beers.length && beers.length !== beersOnPage) {
      setCantNext(true);
    } else {
      setCantNext(false);
    }
  }, [beers.length]);

  console.log(beers.length, beersOnPage);
  return (
    <div className='pagination'>
      <div className='pagination__page-changer'>
        <LinkButton
          btnText='Назад'
          disabled={cantBack}
          func={() => changePage(event, setPage, page, 'back')}
        />
        <span>{page}</span>
        <LinkButton
          btnText='Вперед'
          disabled={cantNext}
          func={() => changePage(event, setPage, page, 'next')}
        />
      </div>
      <div className='pagination__beers-count-changer'>
        <span className='pagination__beers-count-changer-text'>
          Показывать по
        </span>
        <QuantityChanger
          beersOnPage={beersOnPage}
          setBeersOnPage={setBeersOnPage}
        />
      </div>
    </div>
  );
};

export default Pagination;
