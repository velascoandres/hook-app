import React, { Fragment, useState } from 'react'
import './counter.css';

type Counter = {
    counter1: number;
    counter2: number;
    counter3: number;
    counter4: number;
}


export const CounterApp = () => {

    const [{ counter1, counter2, counter3, counter4 }, setCounter] = useState<Counter>(
        {
            counter1: 10,
            counter2: 20,
            counter3: 102,
            counter4: 2,
        }
    );

    const handleClick = () => {
        setCounter(
            state => (
                {
                    ...state,
                    counter1: state.counter1 + 1,
                    counter4: state.counter4 + 1,
                }
            ),
        );
    };

    return (
        <Fragment>
            <h1 >
                Counter 1: {counter1}
            </h1>
            <h1 >
                Counter 2: {counter2}
            </h1>

            <h1 >
                Counter 3: {counter3}
            </h1>

            <h1 >
                Counter 4: {counter4}
            </h1>
            
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
            +1
            </button>
        </Fragment >
    );
}
