import React from 'react';
import ReactDOM from 'react-dom';
import { Padre } from './components/07-tarea-memo/Padre';
import { HookApp } from './HookApp';

ReactDOM.render(
  <React.StrictMode>
    {/*
    <HookApp />
    */}
   <Padre /> 
  </React.StrictMode>,
  document.getElementById('root')
);

