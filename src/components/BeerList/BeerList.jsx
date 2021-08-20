import React, { useEffect, useState } from 'react';
import useHttp from '../../hooks/http.hook';
import './beerList.scss';

import Spinner from '../Spinner';

const BeerList = () => {
  const { request } = useHttp();

  const [loading, setLoading] = useState(true);
  const [bears, setBears] = useState([]);

  const getBeers = async () => {
    const data = await request('https://api.punkapi.com/v2/beers');
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
        return (
          <li key={beer.id} className='beer-list__item'>
            <img src={beer.image_url} />
            <ul>
              <li>Title: {beer.name}</li>
              <li>Tags: {beer.tagline}</li>
              <li>First brewed: {beer.first_brewed}</li>
              <li>description: {beer.description}</li>
              <li>ABV: {beer.abv}</li>
              <li>IBU: {beer.ibu}</li>
              <li>FG: {beer.fg}</li>
              <li>OG: {beer.og}</li>
              <li>EBC: {beer.ebc}</li>
              <li>SRM: {beer.srm}</li>
              <li>PH: {beer.ph}</li>
              <li>Attenuation level: {beer.attenuation_level}</li>
              <li>
                Volume: {beer.volume.value} {beer.volume.unit}
              </li>
              <li>
                Boil volume: {beer.boil_volume.value} {beer.boil_volume.unit}
              </li>
              <li>
                <div>Method:</div>
                <ul>
                  <li>
                    <div>Mash temp:</div>
                    <ul>
                      <li>
                        Temp: {beer.method.mash_temp[0].temp.value}{' '}
                        {beer.method.mash_temp[0].temp.unit}
                      </li>
                      <li>Duration: {beer.method.mash_temp[0].duration}</li>
                    </ul>
                  </li>
                  <li>
                    <div>Fermentation:</div>
                    <ul>
                      <li>
                        Temp: {beer.method.fermentation.temp.value}{' '}
                        {beer.method.fermentation.temp.unit}
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>Twist: {beer.method.twist || '-'}</span>
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default BeerList;
