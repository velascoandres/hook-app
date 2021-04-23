import { useState } from 'react';
import { AppRouter } from './AppRouter';
import { IUser, UserContext } from './UserContext';


export const MainApp = () => {

    const initialUser: IUser = {
        id: 1234,
        name: 'Andres',
        email: 'correo@mail.com'
    };

    const [user, setUser] = useState<IUser>(initialUser);


    const userContextValue = {user, setUser};


    return (
        <UserContext.Provider value={userContextValue}>
            <AppRouter />
        </UserContext.Provider>
    );
}

