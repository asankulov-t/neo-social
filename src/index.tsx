import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./components/redux/ReduxStore";

const Rerender=(state:any)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}
Rerender(store.getState());
store.subscribe(()=>{
    let state=store.getState()
    Rerender(state)
})

