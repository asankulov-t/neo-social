import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialogs/Dialog";
import {Route} from 'react-router-dom';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type DialogsTypes = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type PostDataType = {
    id: number
    post: string
    likeCount: number
    dislike: number
}

type ProfilePageTypes = {
    posts: Array<PostDataType>
}

type StateData = {
    dialogPage: DialogsTypes
    profilePage: ProfilePageTypes
}

type AppTypes = {
    state: StateData
    addPost:(newText:string)=>void
}

function App(props: AppTypes) {
    return (
        <div className="App">
            <Header/>
            <div className={'row'}>
                <div className={'col-3 fixed-left'}>
                    <SideBar/>
                </div>
                <div className="col-6">
                    <Route path={'/profile'}
                           render={() => <Profile postData={props.state.profilePage.posts}
                                                  addPost={props.addPost}
                           />}/>
                    <Route path={'/messages'}
                           render={() => <Dialog dialogsData={props.state.dialogPage}/>}/>
                </div>
                <div className="col-3">
                </div>
            </div>
        </div>
    );
}

export default App;
