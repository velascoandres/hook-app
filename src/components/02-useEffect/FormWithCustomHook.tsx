import React, { Fragment, useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import { Message } from './Message';


export type FormStateCustom = {
    name: string;
    email: string;
    password: string;
};


export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm<FormStateCustom>(
        {
            email: '',
            name: '',
            password: '',
        },
    );

    const { name, email, password } = formValues;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formValues);
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
            <h1>SimpleForm with custom hook</h1>
            <hr />
            <form onSubmit={handleSubmit}>
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
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Tu email"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="********"
                        autoComplete="off"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>


            {(name === '123') && <Message />}

        </Fragment>
    );
}