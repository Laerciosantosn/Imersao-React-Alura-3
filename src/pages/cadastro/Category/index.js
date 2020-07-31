import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  
  const [ values, setValues] = useState(valoresIniciais);
  
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange (event) {
    // const { getAttribute, value } = event.target;
    // console.log(value)
    // console.log(getAttribute)
    setValue(
      event.target.getAttribute('name'), 
      event.target.value
    );
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    
    setCategorias([...categorias, values.nome]);

    setValues(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Cadastro de categorias: {values.nome}</h1>

      <form onSubmit={handleSubmit} >

        <FormField 
          label="Nome da Categoria: "
          name="nome" 
          type="text" 
          value={values.nome}
          onChange={handleChange}
        />

        {/* <FormField 
          label="Descrição: "
          name="nome" 
          type="week" 
          value={values.nome}
          onChange={handleChange}
        /> */}


        <div>
          <label>
            Descrição:
            <textarea
              name="descricao" 
              type="text" 
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField 
          label="Cor: "
          name="cor"
          type="color" 
          value={values.nome}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Cor:
            <input
              name="cor" 
              type="color" 
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button>
          Cadastrar
        </button>
      </form>

    <ul>
      {categorias.map((categoria, index) => (
        <li key={`${categoria}${index}`} >
          {categoria}
        </li>
      ))}
    </ul>

      <Link to='/cadastro/video'>
        <h2>Cadastro Video</h2>
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;