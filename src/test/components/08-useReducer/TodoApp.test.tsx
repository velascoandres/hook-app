import { act } from "@testing-library/react";
import {
    shallow,
    mount,
} from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { ITodo } from "../../../components/08-useReducer/todoReducer";
import { DEMO_TODOS } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoApp />', () => {
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn(() => { });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de agregar un TODO', () => {

        const wrapper = mount(<TodoApp />); // El mount es para probar toda la aplicacion en general
        act(
            () => {
                const todoAdd: any = wrapper.find('TodoAdd').prop('handleAddTodo');
                todoAdd((DEMO_TODOS[0]));
                todoAdd((DEMO_TODOS[1]));
            }
        );
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'todos', "[]",
         );
        expect(localStorage.setItem).toHaveBeenCalledWith(
           'todos', JSON.stringify(DEMO_TODOS),
        );
    });

    test('Debe de eliminar un todo', () => {
       const handleAddTodo: (todo: ITodo) => void = wrapper.find('TodoAdd').prop('handleAddTodo');
       handleAddTodo(DEMO_TODOS[0]);
       const handleDelete: (id: number) => void = wrapper.find('TodoList').prop('handleDelete');
       handleDelete(DEMO_TODOS[0].id);
       expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
    });
    

});
