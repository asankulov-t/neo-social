import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./components/redux/store";

const Rerender=()=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={store}
            />
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}
Rerender();
store.subscriber(Rerender)

