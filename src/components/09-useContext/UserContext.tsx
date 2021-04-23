import {createContext} from  'react';

export type IUserContext  = IUser;

export interface IUser {
    id: number;
    name: string;
    email: string;
}

export const UserContext = createContext<IUserContext | null>(null);