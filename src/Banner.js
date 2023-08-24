import React from 'react';
import img from './assets/img.jpg';
import supermercado from './assets/supermercados.png';
import monitor from './assets/monitorar-tablet-e-smartohone 1.png';
import bebida from './assets/whiskey.png';
import ferramenta from './assets/ferramentas 1.png';
import saude from './assets/cuidados-de-saude 1.png';
import fitnes from './assets/corrida 1.png';
import moda from './assets/moda 1.png';
import './Banner.css';

function Banner (){
    return(
        <div>
            <img src={img}  className='img-baner' alt="Baner Promocional" title="Baner Promocional"/>
            <p className='promo-banner'>Venha Conhecer nossas Promoções<br></br> <em>50 % off nos produtos </em></p>
            <button className='btn-banner'>Ver Produto</button>
            <div>
                <ul className="menu-svg">
                    <li><img src={monitor} className='menu-img'/>Tecnologia</li>
                    <li><img src={supermercado} className='menu-img'/>Supermercado</li>
                    <li> <img src={bebida} className='menu-img'/>Bebidas</li>
                    <li><img src={ferramenta} className='menu-img'/> Ferramentas</li>
                    <li><img src={saude} className='menu-img'/> Saúde</li>
                    <li><img src={fitnes} className='menu-img'/> Esporte e Fitness</li>
                    <li> <img src={moda} className='menu-img'/>Moda</li>
                </ul>
            </div>
        </div>
        )}

export default Banner;