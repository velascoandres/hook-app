import React, { useReducer, useRef } from 'react';
import './styles.css';
import { initialState, ITodo, TodoAction, TodoActionEnum, todoReducer } from './todoReducer';




export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);



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
        
        const newTodo: ITodo = {
            id: new Date().getTime(),
            desc: 'Nuevo todo',
            done: false,
        };

        const action: TodoAction = {
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
                            name="Description"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            className="form-control"
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
