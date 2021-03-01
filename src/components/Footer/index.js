import React from 'react';
import { FooterBase } from './styles';
import logo from '../../assets/img/inbotflix.png'

export default function Footer() {
  return (
    <FooterBase>
      <a href="https://www.inbot.com.br/" target="_blank" rel="noreferrer">
        <img width={130} src={logo} alt="InbotFlix logo" />
      </a>
      <p>
        By Ivo Junior Developer FullStack 🚀
        {' '}
        <a href="https://www.linkedin.com/in/jos%C3%A9-ivo-maciel-j%C3%BAnior-658136145/"
        target="_blank" rel="noreferrer">
          [ Linkedin ]
        </a>
      </p>
    </FooterBase>
  );
}