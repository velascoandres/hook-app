import React, { memo } from 'react'

export type SmallProps = {
    value: number;
};


// Unicamente el componente se volvera a renderizar unicamente
// cuando sus propiedades cambian
export const Small = memo(({ value }: SmallProps) => {

    console.log('Me volvi a llamar');

    return (
        <small>
            {value}
        </small>
    );
});
