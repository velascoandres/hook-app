import React, { useState } from 'react'
import '../02-useEffect/effects.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';


export const ReafExampleRef = () => {

    const [show, setshow] = useState<boolean>(true);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />

            { 
                show && 
                <MultipleCustomHooks />
            
            }


            <button
                className="btn btn-danger mt-5"
                onClick={() => setshow(!show)}
            >
                { show ? 'Hide' : 'Show'} 
            </button>

        </div>
    );
}
