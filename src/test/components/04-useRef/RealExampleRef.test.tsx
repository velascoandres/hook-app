import { shallow } from "enzyme";
import { ReafExampleRef } from "../../../components/04-useRef/ReafExampleRef";

describe('Pruebas en <RealExample />', () => {
    
    const wrapper = shallow(<ReafExampleRef />);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });


    test('Debe ocultar el componente <MultipleCustomHokks />', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });

    
});
