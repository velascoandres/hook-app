import { mount } from "enzyme";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { IUser, UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas en <AppRouter />', () => {

    const user = {
        name: 'Fernando',
        email: 'fernando@gmail.com'
    };

    const setUser = jest.fn((user: IUser) => { });


    const wrapper = mount(
        <UserContext.Provider
            value={
                { user, setUser, }
            }
        >
            <AppRouter />
        </UserContext.Provider>

    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
