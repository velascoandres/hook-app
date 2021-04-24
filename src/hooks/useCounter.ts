import { useState } from "react"

export interface ICounterHook {
    counter: number;
    increment: (n?:number) => () => void;
    decrement: (n?:number) => () => void;
    reset: () => void;
}


export const useCounter = (initialState: number = 1): ICounterHook => {

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
