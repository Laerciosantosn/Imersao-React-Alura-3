import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForms';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);

  const { handleChange, values, clearForms } = useForm(valoresIniciais);

  function handleSubmit(event) {
    event.preventDefault();

    setCategorias([...categorias, values.titulo]);

    clearForms();
  }

  useEffect(() => {
    // categoriasRepository.getAllWithVideos();
    const URL_BACKEND = 'http://localhost:8080/categorias';

    fetch(URL_BACKEND).then(async (response) => {
      const resposta = await response.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categorias:
        {' '}
        {values.titulo}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria: "
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      {categorias.length === 0 && (
        <div>
          {/* Carregando ... */}
          Loadind....
        </div>
      )}

      <Link to="/cadastro/video">
        <h2>Cadastro Video</h2>
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
