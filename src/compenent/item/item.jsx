import React from 'react'
import Card from '../card/card'
import "./item.css";

const item = ({card}) => {
  return (
    <div className='card'>
        <img className='card-logo'  src={card.img} alt="card image" />
        <h1 className='card-title'>{ card.name }</h1>
        {console.log(card)}
    </div>
  );
};
export default item