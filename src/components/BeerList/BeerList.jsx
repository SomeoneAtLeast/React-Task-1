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

  let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beersOnPage}`;
  if (filters.abv_gt) url += `&abv_gt=${filters.abv_gt}`;
  if (filters.abv_lt) url += `&abv_lt=${filters.abv_lt}`;
  if (filters.ibu_gt) url += `&ibu_gt=${filters.ibu_gt}`;
  if (filters.ibu_lt) url += `&ibu_lt=${filters.ibu_lt}`;
  if (filters.ebc_gt) url += `&ebc_gt=${filters.ebc_gt}`;
  if (filters.ebc_lt) url += `&ebc_lt=${filters.ebc_lt}`;
  if (filters.yeast) url += `&yeast=${filters.yeast.replace(/\s/g, '_')}`;
  if (filters.brewed_before) url += `&brewed_before=${filters.brewed_before}`;
  if (filters.brewed_after) url += `&brewed_after=${filters.brewed_after}`;
  if (filters.hops) url += `&hops=${filters.hops.replace(/\s/g, '_')}`;
  if (filters.malt) url += `&malt=${filters.malt.replace(/\s/g, '_')}`;
  if (filters.food) url += `&food=${filters.food.replace(/\s/g, '_')}`;
  if (filters.ids) url += `&ids=${filters.ids}`;

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

  useEffect(() => {
    getBeers();
  }, [page, beersOnPage, filters]);

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
    </div>
  );
};

export default BeerList;
