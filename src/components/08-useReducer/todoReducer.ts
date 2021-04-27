import { Reducer } from "react";

export interface ITodo {
    id: number;
    desc: string;
    done: boolean;
};

export type TodosState = ITodo[];

export const initialState: TodosState = [
    {
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false,
    }
];

export enum TodoActionEnum {
    agregar = 'AGREGAR',
    borrar = 'BORRAR',
    completar = 'COMPLETAR,',
    inicial = 'INICIO',
}

export interface TodoAction {
    type: TodoActionEnum;
};

export interface CrearTodo extends TodoAction {
    type: TodoActionEnum.agregar;
    payload: ITodo;
}

export interface BorrarTodo extends TodoAction {
    type: TodoActionEnum.borrar;
    payload: { id: number };
}

export interface CompletarTodo extends TodoAction {
    type: TodoActionEnum.completar;
    payload: { id: number };
}





export const todoReducer: Reducer<TodosState, TodoAction> = (state: TodosState = [], action: TodoAction) => {
    switch (action?.type) {
        case TodoActionEnum.agregar:
            return [
                ...state,
                (action as CrearTodo).payload,
            ];
        case TodoActionEnum.borrar:
            return state.filter(
                todo => todo.id !== (action as BorrarTodo).payload.id,
            );
        case TodoActionEnum.completar:
            return state.map(
                todo => {
                    const esTodo = todo.id === (action as CompletarTodo).payload.id;
                    if (esTodo) {
                        todo.done = !todo.done;
                        return {
                            ...todo,
                            done: !todo.done,
                        };
                    }
                    return todo;
                },
            );
        default:
            return state;
    }

}