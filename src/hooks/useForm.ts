import React, { SyntheticEvent, useState } from "react";

export type FormValuesState = Record<string, any>;

export type HandleInput = (e: React.ChangeEvent<HTMLInputElement>) => void;

export type UseFormHook = <S>(state: S) => [S, HandleInput];



export const useForm: UseFormHook = <S>(initialState: S) => {

    const [formValues, setformValues] = useState<S>(initialState)


    const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setformValues(
            {
                ...formValues,
                [target.name]: target.value,
            }
        );
    };

    return [
        formValues,
        handleInputChange,
    ];

}


