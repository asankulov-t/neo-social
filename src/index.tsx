import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/ReduxStore";
import {Provider} from "react-redux";

// dispatch={store.dispatch.bind(store)

const Rerender=()=>{
    ReactDOM.render(
        <BrowserRouter>
           <Provider store={store}>
               <App/>
           </Provider>
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}
Rerender()
store.subscribe(()=>{
    Rerender()
})

