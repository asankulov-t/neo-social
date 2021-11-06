import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost,sendMessage, changePostText,changeMessageText} from "./components/redux/state";

export const Rerender=(state:any)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 changePostText={changePostText}
                 sendMessage={sendMessage}
                 changeMessageText={changeMessageText}
            />
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}

