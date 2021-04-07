import React, { useEffect, useState } from 'react';

export type Coords = {
    x: number;
    y: number;
};


export const Message = () => {

    const [{x, y}, setCoords] = useState<Coords>({ x: 0, y: 0 });

    useEffect(() => {
        console.log('Componente montado');

        const handleMouseMove = (e: MouseEvent) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
        };

        window.addEventListener(
            'mousemove',
            handleMouseMove,
        );
        return () => {
            // Cuando el componente se destruye
            window.removeEventListener('mousemove', handleMouseMove);
            // Se usa para optimizar
            console.log('componente desmonstado');
        };
    }, []);

    return (
        <div>
            <h3>Eres genial!!</h3>
            <p>
               x: {x},
               y: {y},
            </p>
        </div>
    );
};
