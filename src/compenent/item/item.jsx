import React from 'react'
import Card from '../card/card'
import "./item.css";
import { useState } from 'react';

const Item = ({card}) => {
  const [showLogo,setShowLogo]=useState(true);
  return (
    <div className='card' onClick={()=>setShowLogo(!showLogo)}>
      {showLogo ? (
        <div>

          <img className='card-logo'  src={card.img} alt="card image" />
          <h1 className='card-title'>{ card.name }</h1>

        </div>
      ) : (
        <ul className='list'>
           {card.options.map((element,index)=>{
          return <li key={index}>{element}</li>
        })}
        </ul>
       
      )}
       
    </div>
  );
};
export default Item