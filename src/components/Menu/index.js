import React from 'react';
import logo from '../../assets/img/inbotflix.png'
import { Link } from 'react-router-dom';
// import Button from '../Button'
import  './styles.css'
// import ButtonLink from '../components/ButtonLink';


export default function Menu() {
 return (
    <nav className="Menu">
        <Link to="/">
            <img className='Logo' src={logo} alt="InbotFlix logo"/>
        </Link>

        {/* <Button as={Link} to="/cadastro/video" className="ButtonLink">
            New video
        </Button> */}
    </nav>
 );
}