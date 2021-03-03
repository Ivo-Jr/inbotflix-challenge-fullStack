import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

export default function CadastroCategoria() {
  
  const [categoria, setCategoria] = useState([]);
  const [filme, setFilme] = useState('');

  function handleAdd() {
    setCategoria([...categoria, filme])
  }

  function handleSubmit(e) {
    e.preventDefault()
  }
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {filme} </h1>

      <form onSubmit={handleSubmit}>
        
        <div>
          <label>
            Nome da Categoria:
            <input 
              type="text"
              value={filme}
              onChange={e => setFilme(e.target.value)}
            />
          </label>
        </div>
        
        <div>
          <label>
            Descriçào:
            <textarea
              type="text"
              // value={filme}
              // onChange={e => setFilme(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
              <input 
                type="color"
                // value={filme}
                // onChange={e => setFilme(e.target.value)}
              />
          </label>
        </div>


        <button onClick={handleAdd} type ="button"> Cadastrar </button>
          
      </form>
          <ul>
            {categoria.map(cat => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}