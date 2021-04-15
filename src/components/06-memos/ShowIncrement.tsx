import React from "react";

export type ShowIncrementProps = {
    increment(num?: number): void;
};


export const ShowIncrement = React.memo(({ increment }: ShowIncrementProps) => {
    
    console.log('Me volví a generar');
    
    return (
        <button
            className="btn btn-primary"
            onClick={() => increment(2)}
        >
            Incrementar
        </button>
    );
});
