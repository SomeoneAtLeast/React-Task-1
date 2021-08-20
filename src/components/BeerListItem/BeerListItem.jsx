import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const BeerListItem = ({ beer }) => {
  return (
    <li key={beer.id} className='beer-list__item'>
      <img src={beer.image_url} />
      <ul>
        <li>Name: {beer.name}</li>
        <li>Tags: {beer.tagline}</li>
        <li>First brewed: {beer.first_brewed}</li>
        <li>description: {beer.description}</li>
        <li>ABV: {beer.abv}</li>
        <li>IBU: {beer.ibu}</li>
        <li>FG: {beer.target_fg}</li>
        <li>OG: {beer.target_og}</li>
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
          <span>Method:</span>
          <ul>
            <li>
              <span>Mash temp:</span>
              <ul>
                <li>
                  Temp: {beer.method.mash_temp[0].temp.value}{' '}
                  {beer.method.mash_temp[0].temp.unit}
                </li>
                <li>Duration: {beer.method.mash_temp[0].duration}</li>
              </ul>
            </li>
            <li>
              <span>Fermentation:</span>
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
        <li>
          <span>Ingredients:</span>
          <ul>
            <li>
              <span>Malt:</span>
              <ul>
                {beer.ingredients.malt.map((malt) => {
                  return (
                    <ul key={uuidv4()}>
                      <li>Name: {malt.name}</li>
                      <li>
                        Amount: {malt.amount.value} {malt.amount.unit}
                      </li>
                    </ul>
                  );
                })}
              </ul>
            </li>
            <li>
              <span>Hops:</span>
              <ul>
                {beer.ingredients.hops.map((hop) => {
                  return (
                    <ul key={uuidv4()}>
                      <li>Name: {hop.name}</li>
                      <li>
                        Amount: {hop.amount.value} {hop.amount.unit}
                      </li>
                      <li>Add: {hop.add}</li>
                      <li>Attribute: {hop.attribute}</li>
                    </ul>
                  );
                })}
              </ul>
            </li>
            <li>Yeast: {beer.ingredients.yeast}</li>
          </ul>
        </li>
        <li>
          <span>Food pairing:</span>
          <ul>
            {beer.food_pairing.map((food) => {
              return <li key={uuidv4()}>{food}</li>;
            })}
          </ul>
        </li>
        <li>Brewers tips: {beer.brewers_tips}</li>
        <li>Contributed by: {beer.contributed_by}</li>
      </ul>
    </li>
  );
};

export default BeerListItem;
