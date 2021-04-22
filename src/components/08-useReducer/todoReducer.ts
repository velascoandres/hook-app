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
    agregar = 'AGREGAR'
}

export type TodoAction = {
    type: TodoActionEnum,
    payload: ITodo,
};



export const todoReducer: Reducer<TodosState, TodoAction> = (state: TodosState = [], action?: TodoAction) => {
    switch(action?.type){
        case TodoActionEnum.agregar:
            return [
                ...state,
                action.payload,
            ];
        default:
            return state;
    }

}