import { AppRouter } from './AppRouter';
import { IUser, UserContext } from './UserContext';


export const MainApp = () => {

    const user: IUser = {
        id: 1234,
        name: 'Andres',
        email: 'correo@mail.com'
    };

    return (
        <UserContext.Provider value={user}>
            <AppRouter />
        </UserContext.Provider>
    );
}

