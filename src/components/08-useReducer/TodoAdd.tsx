import React from 'react'
import { Fragment } from 'react'
import { useForm } from '../../hooks/useForm';
import { ITodo } from './todoReducer';

export type TodoAppProps = {
    handleAddTodo: (todo: ITodo) => void;
};

export const TodoAdd = ({handleAddTodo}: TodoAppProps) => {

    const [{ desc: description }, handleInputChange, reset] = useForm<ITodo>({ id: 0, desc: '', done: false });

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
        handleAddTodo(newTodo);
        reset();
    };

    return (
        <Fragment>
            <h4>Agregar Todo</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
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
        </Fragment>
    );
}
