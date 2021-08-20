import React from 'react';
import './app.scss';

import BeerList from '../components/BeerList';

const App = () => {
  return (
    <main className='main-content'>
      <BeerList />
    </main>
  );
};

export default App;
