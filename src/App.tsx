import React, { useState } from 'react';

import ItemListingCard from './components/ItemListingCard';

import './App.css';



function App() {
  const temp = [
    {title: "Listing 1", price: 1.0},
    {title: "Listing 2", price: 2.0},
    {title: "Listing 3", price: 3.0}
  ];

  const list = temp.map((item) => ItemListingCard(item));
  
  return (
    <React.Fragment>
      <h1>Barketplace</h1>
      <div id='item-list'>
        {list}
      </div>
    </React.Fragment>
  );
}

export default App;
