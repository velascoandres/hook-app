import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { IFetchState, useFetch } from "../../../hooks/useFetch";
import { ICounterHook, useCounter } from "../../../hooks/useCounter";

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');



describe('Pruebas en <MultipleCustomHooks />', () => {


    beforeEach(
        () => {
            (useCounter as jest.Mock<ICounterHook>).mockReturnValue({
                counter: 1,
                increment: (n?: number) => () => { },
                decrement: (n?: number) => () => { },
                reset: () => { },
            });
        }
    );



    test('Debe de mostrarse correctamente', () => {
        (useFetch as jest.Mock<IFetchState<any>>).mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar la informacion', () => {

        (useFetch as jest.Mock).mockReturnValue({
            data: [
                {
                    author: 'Andres',
                    quote: 'Hola Mundo',
                },
            ],
            loading: false,
            error: null,
        },
        );

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Andres');

    });

})
