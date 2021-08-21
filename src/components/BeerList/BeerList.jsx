import React, { useEffect, useState } from 'react';
import useHttp from '../../hooks/http.hook';
import './beerList.scss';

import Spinner from '../Spinner';
import BeerListItem from '../BeerListItem';
import Pagination from '../UI/Pagination';

const BeerList = () => {
  const { request } = useHttp();

  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [beersOnPage, setBeersOnPage] = useState(3);

  const getBeers = async () => {
    const data = await request(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beersOnPage}`
    );
    setBeers(data);
    console.log(data);
  };

  useEffect(() => {
    getBeers();
    setLoading(false);
  }, [page, beersOnPage]);

  if (loading) return <Spinner />;

  return (
    <div className='beer-list-wrapper'>
      <ul className='beer-list'>
        {beers.map((beer) => {
          return <BeerListItem key={beer.id} beer={beer} />;
        })}
      </ul>
      <Pagination
        setPage={setPage}
        page={page}
        beers={beers}
        beersOnPage={beersOnPage}
        setBeersOnPage={setBeersOnPage}
      />
    </div>
  );
};

export default BeerList;
