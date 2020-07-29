import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

// import { Container } from './styles';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de categorias</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to='/cadastro/video'>
        <h2>Cadastro Video</h2>
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;