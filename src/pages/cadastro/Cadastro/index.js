import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

export default function CadastroCategoria() {
  const [categoria, setCategoria] = useState('filme');

  function handleCategory() {
    setCategoria(categoria)
  }


    return (
    <PageDefault>
      <h1>Cadastro de Categoria: {categoria} </h1>

      <form>
        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button onClick={handleCategory}> Cadastrar </button>
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
    )
}