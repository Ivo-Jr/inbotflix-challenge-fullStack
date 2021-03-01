import React from 'react';
import logo from '../../assets/img/inbotflix.png'
import ButtonLink from '../components/ButtonLink';
import  './styles.css'


function Menu() {
 return (
    <nav className="Menu">
        <a href="/">
            <img className='Logo' src={logo} alt="InbotFlix logo"/>
        </a>

        <ButtonLink className="ButtonLink" href="/">
            New video
        </ButtonLink>
    </nav>
 );
}
export default Menu