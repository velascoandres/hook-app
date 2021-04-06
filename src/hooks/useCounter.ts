import { useState } from "react"


export const useCounter = (initialState: number = 10) => {

    const [state, setState] = useState(initialState);

    const increment = (factor: number = 1) => {
        return () => {
            setState(state + factor);
        }
    };

    const decrement = (factor: number = 1) => {
        return () => {
            setState(state - factor);
        }
    };

    const reset = () => {
        setState(initialState);
    }

    return {
        state,
        increment,
        decrement,
        reset,
    };

}
