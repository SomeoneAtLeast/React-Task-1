import React, { useEffect, useState } from 'react';
import useHttp from '../../hooks/http.hook';
import './BeerList.scss';

import Spinner from '../UI/Spinner';
import BeerListItem from '../BeerListItem';
import Pagination from '../UI/Pagination';
import BeerFilter from '../BeerFilter';

const BeerList = () => {
  const { request } = useHttp();

  const [initialLoading, setInitialLoading] = useState(true);
  const [beerItemsLoading, setBeerItemsLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [beersOnPage, setBeersOnPage] = useState(4);
  const [filters, setFilters] = useState({
    abv_gt: undefined,
    abv_lt: undefined,
    ibu_gt: undefined,
    ibu_lt: undefined,
    ebc_gt: undefined,
    ebc_lt: undefined,
    yeast: undefined,
  });

  let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beersOnPage}`;
  if (filters.abv_gt) url += `&abv_gt=${filters.abv_gt}`;
  if (filters.abv_lt) url += `&abv_lt=${filters.abv_lt}`;
  if (filters.ibu_gt) url += `&ibu_gt=${filters.ibu_gt}`;
  if (filters.ibu_lt) url += `&ibu_lt=${filters.ibu_lt}`;
  if (filters.ebc_gt) url += `&ebc_gt=${filters.ebc_gt}`;
  if (filters.ebc_lt) url += `&ebc_lt=${filters.ebc_lt}`;
  if (filters.yeast) url += `&yeast=${filters.yeast.replace(/\s/g, '_')}`;

  const getBeers = async () => {
    setBeerItemsLoading(true);
    const data = await request(url);
    setBeers(data);
    setInitialLoading(false);
    setBeerItemsLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getBeers();
  }, [page, beersOnPage]);

  if (initialLoading) return <Spinner />;

  if (!beers.length)
    return (
      <div className='beer-list-wrapper'>
        <BeerFilter />
        <div className='no-beers'>Ничего не нашлось</div>
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
      <BeerFilter filters={filters} setFilters={setFilters} />
    </div>
  );
};

export default BeerList;
