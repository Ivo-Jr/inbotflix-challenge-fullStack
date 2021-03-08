import React  from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"The Earth's natural reserves are coming to an end and a group of astronauts is tasked with verifying possible planets to receive the world's population, enabling the continuation of the species. Cooper is called to lead the group and accepts the mission knowing that he may never see his children again. Along with Brand, Jenkins and Doyle, he will continue in search of a new home."}
      />

    <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />


      <Footer />
    </div>
  );
}
