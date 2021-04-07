import React, { FormEventHandler, Fragment, useEffect, useState } from 'react'
import './effects.css';

export type FormState = {
    name: string;
    email: string;
};


export const SimpleForm = () => {

    const [formState, setFormState] = useState<FormState>(
        {
            email: '',
            name: '',
        },
    );

    const { name, email } = formState;


    const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(
            {
                ...formState,
                [target.name]: target.value,
            }
        );
    };

    // Para escuchar cambios especificos en un componente
    useEffect(
        () => {
            console.log('email cambio');
        },
        [
            email,
        ]
    );

    // si hay un cambio en el arreglo de dependencia entonces se ejecuta 
    useEffect(
        () => {
            console.log('nombre cambio');
        },
        [
            name,
        ]
    );


    return (
        <Fragment>
            <h1>SimpleForm</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
        </Fragment>
    );
}
