import React from 'react';
import './ItemListingCard.css'

interface ItemListingCardProps {
  title: string;
  price: number;
}

function ItemListingCard(props: ItemListingCardProps) {
  return (
    <div className='item-card'>
      <div className="item-card-title">{props.title}</div>
      <div className="item-card-price">${props.price}</div>
    </div>
  );
}

export default ItemListingCard;