import React, { useState } from 'react';
import PageDefault from '../../components/PageDefault';

export default function Teste() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);

    }

    return (
        <div>
            <PageDefault>
                Contador: {counter}
                <button onClick={increment}>Incrementar </button>
            </PageDefault>
        </div>
    )
}


// const [categoria, setCategoria] = useState('');
//   const [filme, setFilme] = useState('');

//   function handleAdd() {
//     setCategoria([filme])
//   }
  


//     return (
//     <PageDefault>
//       <h1>Cadastro de Categoria: {categoria} </h1>

//       <form >
//         <label>
//           Nome da Categoria:
//           </label>
//           <input 
//             value={filme}
//             onChange={e => setFilme(e.target.value)}
//           />

//         <button onClick = {handleAdd} type ="button"> Cadastrar </button>
//       </form >

//       <Link to="/">
//         Ir para home
//       </Link>
//     </PageDefault>
//     )
// }