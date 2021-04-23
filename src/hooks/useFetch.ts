import React, { useEffect, useRef, useState } from 'react'


// /api/quotes/1

export interface IFetchState<T> {
    data: T[] | null;
    loading: boolean;
    error?: any;
}


export const useFetch = <T>(url: string): IFetchState<T> => {


    const isMounted = useRef<boolean>(true)

    const [state, setstate] = useState<IFetchState<T>>(
        {
            data: null,
            loading: true,
        }
    );


    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

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
                    if (isMounted.current) {
                        setstate(
                            {
                                loading: false,
                                error: null,
                                data,
                            },
                        );
                    } else {
                        console.log('setstate no se llamo');
                    }
                },
            )
            .catch(
                () => setstate(
                    {
                        loading: false,
                        error: 'No se pudo cargar la informacion',
                        data: null,
                    }
                ),
            );

    }, [url]);

    return state;

};
