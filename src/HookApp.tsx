import React from 'react'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
import { SimpleForm } from './components/02-useEffect/SimpleForm'

export const HookApp = () => {
    return (
        <div>
            <CounterApp /> 
            <CounterWithCustomHook /> 
            <SimpleForm />
            <FormWithCustomHook />
        </div>
    );
}
