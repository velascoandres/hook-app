import React, { useContext } from 'react'
import { IUser, UserContext } from './UserContext'

export const LoginScreen = () => {

    // 1. Obtener referencia al context
    // 2. setUser

    const {setUser} = useContext(UserContext);
    
    
    const nuevoUsuario: IUser = {
        email: 'nuevo@gmail.com',
        id: 2,
        name: 'Pepe'
    };


    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={() => setUser(nuevoUsuario) }
            >
                Establecer Usuario
            </button>
        </div>
    )
}
