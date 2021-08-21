import React from 'react';
import './App.scss';

import BeerList from '../components/BeerList';

const App = () => {
  return (
    <main className='main-content'>
      <BeerList />
    </main>
  );
};

export default App;
