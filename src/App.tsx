import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialogs/Dialog";
import {Route} from 'react-router-dom';
import {ActionType} from "./components/redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type DialogsTypes = {
    messageText: string
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
    newPostText: string
    posts: Array<PostDataType>
}

type StateData = {
    dialogReducer: DialogsTypes
    profileReducer: ProfilePageTypes
}


type AppTypes = {
    state: StateData
    dispatch: (action: ActionType) => void
}

function App(props: AppTypes) {
    console.log(props.state.dialogReducer)
    return (
        <div className="App">
            <Header/>
            <div className={'row'}>
                <div className={'col-3 fixed-left'}>
                    <SideBar/>
                </div>
                <div className="col-6">
                    <Route path={'/profile'}
                           render={() => <Profile postData={props.state.profileReducer.posts}
                                                  dispatch={props.dispatch.bind(props.state)}
                                                  newPostText={props.state.profileReducer.newPostText}

                           />}/>
                    <Route path={'/messages'}
                           render={() => <DialogsContainer
                                           text={props.state.dialogReducer.messageText}
                                           dispatch={props.dispatch.bind(props.state)}
                                           dialogsData={props.state.dialogReducer}
                           />}/>
                </div>
                <div className="col-3">
                </div>
            </div>
        </div>
    );
}

export default App;
