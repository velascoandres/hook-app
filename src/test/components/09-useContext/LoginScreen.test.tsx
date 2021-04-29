import { act } from "@testing-library/react";
import { mount } from "enzyme"
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { IUser, UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas con <LoginScreen />', () => {

    const user = {
        name: 'Fernando',
        email: 'fernando@gmail.com'
    };

    const nuevoUsuario: IUser = {
        email: 'nuevo@gmail.com',
        id: 2,
        name: 'Pepe'
    };


    const setUser = jest.fn((user: IUser) => { });
    const wrapper = mount(
        <UserContext.Provider
            value={{ user, setUser }}
        >
            <LoginScreen />
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de ejecutar el setUser con el argumento esperado', () => {
        act(
            () => {
                wrapper.find('button').simulate('click');
            }
        );
        expect(setUser).toHaveBeenLastCalledWith(nuevoUsuario);
    })

})
