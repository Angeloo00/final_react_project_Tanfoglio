import React from 'react'
import {TabellaMenu} from '../addons/TabellaMenu'
import ItemMenu from '../components/ItemMenu';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Il Nostro Menu</h1>
        <div className='TabellaMenu'>
            {TabellaMenu.map((item, key) => {
                return (
                    <ItemMenu
                     key={key}
                     image={item.image}
                     name={item.name}
                     price={item.price} 
                     />
                );
            })}
        </div>
    </div>
  );
}

export default Menu
