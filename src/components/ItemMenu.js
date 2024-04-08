import React from 'react'

function ItemMenu(props) {
  return (
    <div className='ItemMenu'>
        <div style={{backgroundImage: `url(${props.image})` }}></div>
        <h1> {props.name} </h1>
        <p> ${props.price} </p>
      
    </div>
  );
}

export default ItemMenu
