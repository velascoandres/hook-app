import { todoReducer, TodoActionEnum, ITodo, CrearTodo, BorrarTodo, CompletarTodo } from "../../../components/08-useReducer/todoReducer"
import { DEMO_TODOS } from "../../fixtures/demoTodos";



describe('Prebas en todoReducer', () => {
    test('Debe de retornar el estado por defecto', () => {
        const state = todoReducer(DEMO_TODOS, { type: TodoActionEnum.inicial });
        expect(state).toEqual(DEMO_TODOS);
    })

    test('Debe de agregar un TODO', () => {
        const nuevoTodo: ITodo = {
            id: 3,
            desc: 'Aprender Angular',
            done: false,
        };
        const action: CrearTodo = {
            type: TodoActionEnum.agregar,
            payload: nuevoTodo,
        };
        const state = todoReducer(DEMO_TODOS, action);
        expect(state.length).toBe(3);
        expect(state).toEqual(
            [
                ...DEMO_TODOS,
                nuevoTodo,
            ]
        );
    });
    test('Debe de borrar un TODO', () => {
        const idBorrar = 2;
        const action: BorrarTodo = {
            type: TodoActionEnum.borrar,
            payload: { id: idBorrar },
        };
        const state = todoReducer(DEMO_TODOS, action);
        expect(state.length).toBe(1);
        expect(state).toEqual(
            [
                DEMO_TODOS[0],
            ],
        );
    });

    test('Debe de hacer el toogle del primer todo', () => {
        const action: CompletarTodo = {
            type: TodoActionEnum.completar,
            payload: { id: 1 },
        };
        const state = todoReducer(DEMO_TODOS, action);
        expect(state[0].done).toEqual(
            true,
        );
        expect(state[1].done).toEqual(
            false,
        );
    });

})
