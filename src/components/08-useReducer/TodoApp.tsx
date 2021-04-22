import { useReducer } from 'react';
import './styles.css';
import { initialState, todoReducer } from './todoReducer';




export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState);

    console.log(todos);

    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>
            </ul>

        </div>
    );
}
