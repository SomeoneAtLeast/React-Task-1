import React, { useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';
import useDebounce from '../../hooks/useDebounce';
import './BeerList.scss';

import Spinner from '../UI/Spinner';
import BeerListItem from '../BeerListItem';
import Pagination from '../UI/Pagination';
import BeerFilter from '../BeerFilter';
import BeerSearch from '../BeerSearch';

const BeerList = () => {
  const { request } = useHttp();

  const [initialLoading, setInitialLoading] = useState(true);
  const [beerItemsLoading, setBeerItemsLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [beersOnPage, setBeersOnPage] = useState(4);
  const [filters, setFilters] = useState({
    abv_gt: '',
    abv_lt: '',
    ibu_gt: '',
    ibu_lt: '',
    ebc_gt: '',
    ebc_lt: '',
    yeast: '',
    brewed_before: '',
    brewed_after: '',
    hops: '',
    malt: '',
    food: '',
    ids: '',
  });

  const [beerName, setBeerName] = useState({
    name: '',
  });

  let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beersOnPage}`;

  for (const filter in filters) {
    if (
      filters[filter] &&
      (filter === 'yeast' ||
        filter === 'hops' ||
        filter === 'malt' ||
        filter === 'food' ||
        filter === 'name')
    ) {
      url += `&${filter}=${filters[filter].replace(/\s/g, '_')}`;
    } else if (filters[filter]) {
      url += `&${filter}=${filters[filter]}`;
    }
  }

  if (beerName.name) url += `&beer_name=${beerName.name}`;

  const getBeers = async () => {
    try {
      setBeerItemsLoading(true);
      const data = await request(url);
      setBeers(data);
      setInitialLoading(false);
      setBeerItemsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const debouncedBeerName = useDebounce(beerName, 200);

  useEffect(() => {
    setPage(1);
  }, [beersOnPage, filters, debouncedBeerName]);

  useEffect(() => {
    getBeers();
  }, [page, beersOnPage, filters, debouncedBeerName]);

  if (initialLoading) return <Spinner />;

  if (!beers.length)
    return (
      <div className='beer-list-wrapper'>
        <BeerFilter filters={filters} setFilters={setFilters} />
        <div className='no-beers'>Ничего не нашлось</div>
        <Pagination
          setPage={setPage}
          page={page}
          beers={beers}
          beersOnPage={beersOnPage}
          setBeersOnPage={setBeersOnPage}
          beerItemsLoading={beerItemsLoading}
        />
        <BeerSearch setBeerName={setBeerName} beerName={beerName} />
      </div>
    );

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
        beerItemsLoading={beerItemsLoading}
      />
      <BeerFilter filters={filters} setFilters={setFilters} setPage={setPage} />
      <BeerSearch setBeerName={setBeerName} beerName={beerName} />
    </div>
  );
};

export default BeerList;
