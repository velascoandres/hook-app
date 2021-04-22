import React, { useEffect, useReducer, useRef } from 'react';
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { initialState, ITodo, TodoAction, TodoActionEnum, todoReducer } from './todoReducer';


const init = () => {

    const rawTodos = localStorage.getItem('todos');

    return rawTodos ? JSON.parse(rawTodos): [];
};


export const TodoApp = () => {

    // const [todos, dispatch] = useReducer(todoReducer, initialState);
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ desc: description }, handleInputChange, reset] = useForm<ITodo>({ id: 0, desc: '', done: false });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const renderizarTodos = () => {
        return todos.map(
            ({ id, desc }, indice: number) => (
                <li
                    key={id}
                    className="list-group-item"
                >
                    <p className="text-center">
                        {indice + 1}. {desc}
                    </p>
                    <button
                        className="btn btn-danger"
                    >
                        Borrar
                    </button>
                </li>
            ),
        );
    };


    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo: ITodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        const action: TodoAction = {
            type: TodoActionEnum.agregar,
            payload: newTodo,
        };


        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {renderizarTodos()}
                    </ul>                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            ref={inputRef}
                            type="text"
                            name="desc"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            className="form-control"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
