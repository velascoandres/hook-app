import { useEffect, useReducer } from 'react';

import {
    BorrarTodo,
    CompletarTodo,
    CrearTodo,
    ITodo,
    TodoActionEnum,
    todoReducer,
} from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

const init = () => {

    const rawTodos = localStorage.getItem('todos');

    return rawTodos ? JSON.parse(rawTodos) : [];
};


export const TodoApp = () => {

    // const [todos, dispatch] = useReducer(todoReducer, initialState);
    const [todos, dispatch] = useReducer(todoReducer, [], init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleDelete = (id: number) => {
        return () => {
            const action: BorrarTodo = {
                type: TodoActionEnum.borrar,
                payload: { id, },
            };
            dispatch(action);
        };
    };

    const handleComplete = (id: number) => {
        return () => {
            const action: CompletarTodo = {
                type: TodoActionEnum.completar,
                payload: { id, },
            };
            dispatch(action);
        };
    };

    const handleAddTodo = (newTodo: ITodo) => {
        const action: CrearTodo = {
            type: TodoActionEnum.agregar,
            payload: newTodo,
        };

        dispatch(action);

    }


    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleComplete={handleComplete}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    );
}
