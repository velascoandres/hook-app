import { useState } from "react"


export const useCounter = (initialState: number = 1) => {

    const [counter, setCounter] = useState(initialState);

    const increment = (factor: number = 1) => {
        return () => {
            setCounter(counter + factor);
        };
    };

    const decrement = (factor: number = 1) => {
        return () => {
            setCounter(counter - factor);
        }
    };

    const reset = () => {
        setCounter(initialState);
    };

    return {
        counter,
        increment,
        decrement,
        reset,
    };

}
