import { mount } from "enzyme"
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { IUser, UserContext } from "../../../components/09-useContext/UserContext";


describe('Pruebas en <HomeScreen />', () => {
    
    const user = {
        name: 'Fernando',
        email: 'fernando@gmail.com'
    };

    const setUser = jest.fn((user: IUser) => {});

    test('debe de mostrarse correctamente', () => {
        const wrapper = mount(
            <UserContext.Provider
                value={{user, setUser}}
            >
                <HomeScreen />
            </UserContext.Provider> 
        );
        expect(wrapper).toMatchSnapshot();
    });
    
})
