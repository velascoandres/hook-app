import { TodoItem } from './TodoItem';
import { ITodo } from './todoReducer';

export type TodoListProps = {
    todos: ITodo[];
    handleDelete: (id: number) => () => void;
    handleComplete: (id: number) => () => void;
};

export const TodoList = ({ todos, handleComplete, handleDelete }: TodoListProps) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map(
                    (todo, indice: number) => (
                        <TodoItem
                            todo={todo}
                            index={indice}
                            handleComplete={handleComplete}
                            handleDelete={handleDelete}
                        />
                    ),
                )
            }
        </ul>
    )
}
