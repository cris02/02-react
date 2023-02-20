import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { CounterApp } from './CounterApp/CounterApp';
import { FirstApp } from './FirstApp';
import './styles.css';



ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            {/* <App />
            <FirstApp  /> */}
            <CounterApp value={25} />
        </React.StrictMode>
    )