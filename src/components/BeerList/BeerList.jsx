import React, { useEffect, useState } from 'react';
import useHttp from '../../hooks/http.hook';
import './beerList.scss';

import Spinner from '../Spinner';
import BeerListItem from '../BeerListItem';

const BeerList = () => {
  const { request } = useHttp();

  const [loading, setLoading] = useState(true);
  const [bears, setBears] = useState([]);

  const getBeers = async () => {
    const data = await request(
      'https://api.punkapi.com/v2/beers?page=2&per_page=3'
    );
    setBears(data);
    console.log(data);
  };

  useEffect(() => {
    getBeers();
    setLoading(false);
  }, []);

  if (loading) return <Spinner />;

  return (
    <ul className='beer-list'>
      {bears.map((beer) => {
        return <BeerListItem key={beer.id} beer={beer} />;
      })}
    </ul>
  );
};

export default BeerList;
