import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState<number>(10)

    // En el caso de las funciones se van a volver a generar
    // cuando el estado cambie por lo consiguiente el memo no servira en este caso
    /*
    const increment = () => {
            setCounter(counter + 1);
    };
    */

    const increment = useCallback(
        (num: number = 1) => { // Los argumentos del callback
            setCounter(c => c + num);
        },
        [
            setCounter,
        ],
    );
    // Para el caso de useEffect
    useEffect(() => {
        // ???
    }, [increment]); // Se usa el callback del useCallback 

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />

        </div>
    );
}
