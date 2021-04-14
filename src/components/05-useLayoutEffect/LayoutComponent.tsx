import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import { IQuote } from "../03-examples/MultipleCustomHooks";

import './layout.css';


export const Layout = () => {


    const { counter, increment } = useCounter(1);

    const url = `https://breakingbadapi.com/api/quotes/${counter}`;

    const { data, loading } = useFetch<IQuote>(url);

    const { author, quote } = data && data.length ? data[0] : { author: '', quote: '' };

    const parrafoRef = useRef<HTMLParagraphElement>(null);


    const [boxSize, setboxSize] = useState<DOMRect>();


    // Se dispara despues de todas las mutaciones del DOM 
    useLayoutEffect(() => {

        setboxSize(parrafoRef.current?.getBoundingClientRect());

    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
            <blockquote className="blockquote text-right">
                <p
                    className="mb-0"
                    ref={parrafoRef}
                >
                    {quote}
                </p>
                <footer className="blockquote-footer">
                    {author}
                </footer>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 10)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={increment()}
            >
                Siguiente quote
            </button>

        </div>
    );
}
