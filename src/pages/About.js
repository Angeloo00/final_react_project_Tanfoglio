import React from 'react'
import pizzaAboutt from '../assets/pizzaabout.jpg' 
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${pizzaAboutt})` }}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>
            Benvenuti da Farina&co, dove la passione è l'ingrediente principale in ogni fetta di pizza che serviamo. La nostra storia inizia nel cuore della vivace città, dove nel 2024 abbiamo aperto le nostre porte per la prima volta. Guidati dalla passione per l'autentica cucina italiana e dall'amore per la pizza, abbiamo trasformato un piccolo locale in un'accogliente oasi gastronomica.
            </p>
            <p>
            Fin dal primo giorno, ci siamo dedicati a creare un'esperienza culinaria indimenticabile per ogni cliente che attraversa la nostra porta. La nostra missione è semplice: creare prelibatezze che delizino il palato e scaldino il cuore. Ogni pizza è una tela in bianco, sulla quale dipingiamo con cura un'esplosione di sapori freschi e genuini.
            </p>
            <p>
            Ma cosa ci rende così speciali? È la passione che mettiamo in ogni fase della preparazione. Dalla selezione dei migliori ingredienti, alla lenta fermentazione della nostra impasto segreta, fino alla cottura nel forno tradizionale a legna, ogni passo è eseguito con maestria e dedizione.
            </p>
            <p>
            E non ci fermiamo alla pizza. Il nostro menu offre un'ampia selezione di antipasti, insalate, pasta e dolci fatti in casa, tutti preparati con gli stessi standard di eccellenza e attenzione al dettaglio.
            </p>
            <p>
            Ma Farina&co è più di un semplice ristorante. È un luogo dove le famiglie si riuniscono per festeggiare, gli amici si incontrano per condividere una buona risata e gli amanti della buona cucina trovano un rifugio per soddisfare i loro desideri gastronomici.
            </p>
            <p>
            Siamo grati per ogni sorriso che accogliamo e ogni cliente che diventa parte della nostra famiglia Farina&co. Siamo entusiasti di condividere la nostra passione con voi e di continuare a creare momenti indimenticabili, un morso alla volta. Grazie per aver scelto Farina&co, dove la passione è sempre al primo posto.
            </p>
        </div>
    </div>
  )
}

export default About
