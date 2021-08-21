import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './BeerListItem.scss';

const BeerListItem = ({ beer }) => {
  return (
    <li key={beer.id} className='beer-list-item'>
      <img className='beer-list-item_img' src={beer.image_url} />
      <ul className='beer-list-item__sub-list'>
        <li className='beer-list-item__sub-list-item beer-list-item__sub-list-item-beer-name'>
          <h3>Name: {beer.name}</h3>
        </li>
        <li className='beer-list-item__sub-list-item'>Tags: {beer.tagline}</li>
        <li className='beer-list-item__sub-list-item'>
          First brewed: {beer.first_brewed}
        </li>
        <li className='beer-list-item__sub-list-item'>
          description: {beer.description}
        </li>
        <li className='beer-list-item__sub-list-item'>ABV: {beer.abv}</li>
        <li className='beer-list-item__sub-list-item'>IBU: {beer.ibu}</li>
        <li className='beer-list-item__sub-list-item'>FG: {beer.target_fg}</li>
        <li className='beer-list-item__sub-list-item'>OG: {beer.target_og}</li>
        <li className='beer-list-item__sub-list-item'>EBC: {beer.ebc}</li>
        <li className='beer-list-item__sub-list-item'>SRM: {beer.srm}</li>
        <li className='beer-list-item__sub-list-item'>PH: {beer.ph}</li>
        <li className='beer-list-item__sub-list-item'>
          Attenuation level: {beer.attenuation_level}
        </li>
        <li className='beer-list-item__sub-list-item'>
          Volume: {beer.volume.value} {beer.volume.unit}
        </li>
        <li className='beer-list-item__sub-list-item'>
          Boil volume: {beer.boil_volume.value} {beer.boil_volume.unit}
        </li>
        <li className='beer-list-item__sub-list-item'>
          <span>Method:</span>
          <ul className='beer-list-item__sub-list'>
            <li className='beer-list-item__sub-list-item'>
              <span>Mash temp:</span>
              {beer.method.mash_temp.map((mashTemp) => {
                return (
                  <ul className='beer-list-item__sub-list' key={uuidv4()}>
                    <li className='beer-list-item__sub-list-item'>
                      Temp: {mashTemp.temp.value} {mashTemp.temp.unit}
                    </li>
                    <li className='beer-list-item__sub-list-item'>
                      Duration: {mashTemp.duration}
                    </li>
                  </ul>
                );
              })}
            </li>
            <li className='beer-list-item__sub-list-item'>
              <span>Fermentation:</span>
              <ul className='beer-list-item__sub-list'>
                <li className='beer-list-item__sub-list-item'>
                  Temp: {beer.method.fermentation.temp.value}{' '}
                  {beer.method.fermentation.temp.unit}
                </li>
              </ul>
            </li>
          </ul>
          <span>Twist: {beer.method.twist || '-'}</span>
        </li>
        <li className='beer-list-item__sub-list-item'>
          <span>Ingredients:</span>
          <ul className='beer-list-item__sub-list'>
            <li className='beer-list-item__sub-list-item'>
              <span>Malt:</span>
              <ul className='beer-list-item__sub-list'>
                {beer.ingredients.malt.map((malt) => {
                  return (
                    <li
                      className='beer-list-item__sub-list-item'
                      key={uuidv4()}
                    >
                      <ul className='beer-list-item__sub-list'>
                        <li className='beer-list-item__sub-list-item'>
                          Name: {malt.name}
                        </li>
                        <li className='beer-list-item__sub-list-item'>
                          Amount: {malt.amount.value} {malt.amount.unit}
                        </li>
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className='beer-list-item__sub-list-item'>
              <span>Hops:</span>
              <ul className='beer-list-item__sub-list'>
                {beer.ingredients.hops.map((hop) => {
                  return (
                    <li
                      className='beer-list-item__sub-list-item'
                      key={uuidv4()}
                    >
                      <ul className='beer-list-item__sub-list'>
                        <li className='beer-list-item__sub-list-item'>
                          Name: {hop.name}
                        </li>
                        <li className='beer-list-item__sub-list-item'>
                          Amount: {hop.amount.value} {hop.amount.unit}
                        </li>
                        <li className='beer-list-item__sub-list-item'>
                          Add: {hop.add}
                        </li>
                        <li className='beer-list-item__sub-list-item'>
                          Attribute: {hop.attribute}
                        </li>
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className='beer-list-item__sub-list-item'>
              Yeast: {beer.ingredients.yeast}
            </li>
          </ul>
        </li>
        <li className='beer-list-item__sub-list-item'>
          <span>Food pairing:</span>
          <ul className='beer-list-item__sub-list'>
            {beer.food_pairing.map((food) => {
              return <li key={uuidv4()}>{food}</li>;
            })}
          </ul>
        </li>
        <li className='beer-list-item__sub-list-item'>
          Brewers tips: {beer.brewers_tips}
        </li>
        <li className='beer-list-item__sub-list-item'>
          Contributed by: {beer.contributed_by}
        </li>
      </ul>
    </li>
  );
};

export default BeerListItem;
