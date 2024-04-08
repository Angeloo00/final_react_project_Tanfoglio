import React from 'react'
import pizzaLeft from "../assets/pizzaLeft.jpg"
import '../styles/Contatti.css'

function Contatti() {
  return (
    <div className='contatti'>
        <div className='leftSide' style={{backgroundImage: `url(${pizzaLeft})` }}>

        </div>
        <div className='rightSide'>
            <h1> Contattaci! </h1>
            <form id='contact-form' method='Invia'>
                <label htmlFor="name">Nome e Cognome</label>
                <input name='name' placeholder='Inserisci il tuo nome e cognome...' type='text'></input>
                <label htmlFor="name">Email</label>
                <input name='name' placeholder='Inserisci la tua Email...' type='email'></input>
                <label htmlFor="message">Messaggio</label>
                <textarea rows="5" placeholder='Inserisci il messaggio da inviare...' name='message' required></textarea>
                <button type='submit'> Invia il messaggio</button>
            </form>
            
        </div>
      
    </div>
  )
}

export default Contatti
