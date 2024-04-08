import React from 'react'
import {Link} from 'react-router-dom'
import BackgroundImage from '../assets/pizzaBackground.jpeg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BackgroundImage})` }}>
      <div className='headerContainer'>
        <h1> Farina & co </h1>
        <p> LA PASSIONE SI GUSTA </p>
        <Link to='/menu'>
          <button> ORDINA ORA </button>
        </Link>
      </div>
    </div>
  );
}

export default Home
