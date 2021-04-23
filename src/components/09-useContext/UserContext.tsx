import { createContext } from 'react';

export type UserContext = {
    user: IUser;
    setUser: (user: IUser) => void;
}

export interface IUser {
    id?: number;
    name?: string;
    email?: string;
}

const emptyUser = {
    id: 0,
    name: '',
    email: '',
};

const defaultSetUser = (user: IUser) => { };

export const UserContext = createContext<UserContext>({ user: emptyUser, setUser: defaultSetUser });