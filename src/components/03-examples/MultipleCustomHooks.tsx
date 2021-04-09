import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { IFetchState, useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export interface IQuote {
    quote_id: number;
    author: string;
    quote: string;
}


export const MultipleCustomHooks = () => {


    const { counter, increment } = useCounter(1);

    const url = `https://breakingbadapi.com/api/quotes/${counter}`;

    const { data, loading } = useFetch<IQuote>(url);

    const { author, quote } = data ? data[0] : { author: '', quote: ''};


    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (

                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer">
                                {author}
                            </footer>
                        </blockquote>
                    )
            }

            <button
                className="btn btn-primary"
                onClick={increment()}
            >
                Siguiente quote
            </button>

        </div>
    );
}
