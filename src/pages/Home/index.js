import React from 'react';

import PageDefault from '../../components/PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carrosel from '../../components/Carousel';

function Home() {
  return (
    <PageDefault>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-End"
      />

      {dadosIniciais.categorias.map((category, index) => (

        <Carrosel
          key={index}
          ignoreFirstVideo
          category={category}
        />
      ))}

    </PageDefault>
  );
}

export default Home;
