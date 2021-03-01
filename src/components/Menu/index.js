import React from 'react';
import logo from '../../assets/img/inbotflix.png'
// import ButtonLink from '../components/ButtonLink';
import Button from '../Button'
import  './styles.css'


export default function Menu() {
 return (
    <nav className="Menu">
        <a href="/">
            <img className='Logo' src={logo} alt="InbotFlix logo"/>
        </a>

        <Button as='a' href="/" className="ButtonLink">
            New video
        </Button>
    </nav>
 );
}