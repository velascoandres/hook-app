import { shallow } from "enzyme"
import { TodoItem } from '../../../components/08-useReducer/TodoItem';
import { DEMO_TODOS } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoListItem/>', () => {

    const todo = DEMO_TODOS[0];
    const handleToogle = jest.fn();
    const handleDelete = jest.fn();
    const wrapper = shallow(
        <TodoItem
            todo={todo}
            index={0}
            handleComplete={handleToogle}
            handleDelete={handleDelete}
        />);
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la funcion handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(todo.id);
    });

    test('debe de llamar la funcion handleComplete', () => {
        wrapper.find('p').simulate('click');
        expect(handleToogle).toHaveBeenCalledWith(todo.id);
    });

    test('debe de mostrar el texto correctamente', () => {
        const p = wrapper.find('p');
        expect(p.text()).toBe(`1. ${todo.desc.trim()}`);
    });

    test('debe de tener la clase complete si el TODO.done = true', () => {
        const todoCompletado = {
            ...todo,
            done: true,
        };
        const wrapperDone = shallow(
            <TodoItem
                todo={todoCompletado}
                index={0}
                handleComplete={handleToogle}
                handleDelete={handleDelete}
            />);
        const parrafoDone = wrapperDone.find('p');
        const parrafoUnDone = wrapper.find('p');
        expect(parrafoDone.hasClass('complete')).toBe(true);
        expect(parrafoUnDone.hasClass('complete')).toBe(false);
    });


})
