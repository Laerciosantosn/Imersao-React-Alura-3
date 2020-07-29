import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

// import { Container } from './styles';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de videos</h1>
      <Link to='/cadastro/categoria'>
        <h2>Cadastro Categoria</h2>
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;