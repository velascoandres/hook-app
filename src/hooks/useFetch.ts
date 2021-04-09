import React, { useEffect, useState } from 'react'


// /api/quotes/1

export interface IFetchState<T> {
    data: T[] | null;
    loading: boolean;
    error?: any;
}


export const useFetch = <T>(url: string): IFetchState<T> => {


    const [state, setstate] = useState<IFetchState<T>>(
        {
            data: null,
            loading: true,
        }
    );

    useEffect(() => {
        
        setstate(
            {
                data: null,
                loading: true,
            }
        );

        fetch(url)
            .then(resp => resp.json())
            .then(
                data => {
                    setstate(
                        {
                            loading: false,
                            error: null,
                            data,
                        },
                    )
                },
            );

    }, [url]);

    return state;

};
