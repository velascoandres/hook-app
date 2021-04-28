import { shallow } from "enzyme"
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { DEMO_TODOS } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleComplete = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={DEMO_TODOS}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
        />
    );

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de tener dos <TodoItem />', () => {
        const items = wrapper.find('TodoItem');
        expect(items.length).toBe(DEMO_TODOS.length);
        expect(items.at(0).prop('handleDelete')).toEqual(
            expect.any(Function),
        );
    });

});
