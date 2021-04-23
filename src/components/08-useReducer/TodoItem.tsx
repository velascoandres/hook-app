import { ITodo } from './todoReducer';


export type TodoItemProps = {
    todo: ITodo;
    handleDelete: (id: number) => () => void;
    handleComplete: (id: number) => () => void;
    index: number;
};

export const TodoItem = ({ todo, index, handleDelete, handleComplete }: TodoItemProps) => {

    const { done, id, desc } = todo;

    return (
        <li
            key={id}
            className="list-group-item"
        >
            <p
                className={done ? "complete" : "uncomplete"}
                onClick={handleComplete(id)}
            >
                {index + 1}. {desc}
            </p>
            <button
                className="btn btn-danger"
                onClick={handleDelete(id)}
            >
                Borrar
            </button>
        </li>
    );
}
