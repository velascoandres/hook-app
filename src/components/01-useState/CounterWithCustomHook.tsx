import React, { Fragment } from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(100);

    return (
        <Fragment>
            <h1>Counter with custom hook: {counter}</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={increment(10)}
            >
                +1
            </button>

            <button
                className="btn btn-info"
                onClick={reset}
            >
                Reset
            </button>

            <button
                className="btn btn-dark"
                onClick={decrement(10)}
            >
                -1
            </button>
        </Fragment>
    );
}
