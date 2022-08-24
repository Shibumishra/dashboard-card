import React from 'react';
import Data from './Data';
import CardItem from './CardItem';

const Card = () => {
    
  return (
    <div className='card-container'>
        {Data.map((item, index) => 
        <CardItem key={index} item={item} />
        )}
    </div>
  )
}

export default Card;