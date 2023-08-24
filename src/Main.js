import React from 'react';
import './Main.css';
import img from '../assets/img.jpg';

function Main (){
    return(
        <div>
            <img src={img} alt="Baner Promocional"/>
            <p>Venha Conhecer nossas Promoções <em>50 % off nos produtos </em></p>
            <button>Ver Produto</button>
        </div>
        )}

export default Main;