import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);

    const [show, setShow] = useState<boolean>(true);

    return (
        <div>
            <h2>Memorize: <Small value={counter} /> </h2>
            <hr />

            <button
                className="btn btn-primary"
                onClick={increment()}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    );
}
