import React, { useRef } from 'react'
import { LegacyRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    // Referencias para componentes, numeros, etc
    const inputRef = useRef<HTMLInputElement>(null);


    const handleClick = () => {
        inputRef.current?.select();
    };


    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    );
}
