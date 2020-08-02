import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForms';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categiasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { values, handleChange } = useForm({
    titulo: 'Videos de dev',
    url: 'https://www.youtube.com/watch?v=kjhu1LEmRpY',
    categoria: 'Front End',
  });

  useEffect(() => {
    categiasRepository.getAll().then((categiasFromServer) => {
      setCategorias(categiasFromServer);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de videos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaIdEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaIdEscolhida.id,
        })
          .then(() => {
            console.log('Videos cadastrado');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Nome do Video: "
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL: "
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria: "
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        <h2>Cadastro Categoria</h2>
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
