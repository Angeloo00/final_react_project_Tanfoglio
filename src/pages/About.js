import React from 'react'
import pizzaAboutt from '../assets/pizzaabout.jpg' 
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${pizzaAboutt})` }}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <center>
            <p>
            Farina&co, un ristorante fondato nel 2024, si distingue per la passione dedicata alla preparazione di ogni piatto, specialmente le pizze.
            </p>
            <p>
            Oltre alla pizza, il menu comprende antipasti, insalate, pasta e dolci fatti in casa. Il locale è un luogo di incontro per famiglie, amici e amanti della buona cucina.
            </p>
            <p>
            La filosofia di Farina&co è creare esperienze culinarie indimenticabili, un morso alla volta, con attenzione al dettaglio e standard di eccellenza.
            </p>
            </center>
        </div>
    </div>
  )
}

export default About
