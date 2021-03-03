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