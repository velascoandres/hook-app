import { shallow } from "enzyme"
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd handleAddTodo={handleAddTodo} />
    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar addTODO', () => {
        const formSubmit: any = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    },
    );

    test('Debe de llamar la función handleAddTodo', () => {
        const value = 'Aprender React';
        wrapper
            .find('input')
            .simulate(
                'change',
                { target: { value, name: 'desc' } },
            );
        const formSubmit: any = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number)
        });

        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
