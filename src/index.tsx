import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {StateProvider} from "./utils/StateProvider";
import {initialState, reducer} from "./utils/reducer";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
        <StateProvider initialState={initialState} reducer={reducer}>
            <App/>
        </StateProvider>
);


