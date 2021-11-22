import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialogs/Dialog";
import {Route} from 'react-router-dom';
import {StoreStateType} from "./components/redux/store";

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type DialogsTypes = {
    messageText:string
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
    newPostText:string
    posts: Array<PostDataType>
}

// type StateData = {
//     dialogPage: DialogsTypes
//     profilePage: ProfilePageTypes
// }

type AppTypes = {
    state: StoreStateType
    // addPost:(newText:string)=>void
    // changePostText:(e:string)=>void
    // sendMessage:(messageText:string)=>void
    // changeMessageText:(e:string)=>void
}

function App(props: AppTypes) {
    let state=props.state._getState()
    return (
        <div className="App">
            <Header/>
            <div className={'row'}>
                <div className={'col-3 fixed-left'}>
                    <SideBar/>
                </div>
                <div className="col-6">
                    <Route path={'/profile'}
                           render={() => <Profile postData={props.state._state.profilePage.posts}
                                                  dispatch={props.state.dispatch.bind(props.state)}
                                                  newPostText={props.state._state.profilePage.newPostText}
                                                  addPost={props.state.addPost.bind(props.state)}
                                                  changePostText={props.state.changePostText.bind(props.state)}
                           />}/>
                    <Route path={'/messages'}
                               render={() => <Dialog
                               text={props.state._state.dialogPage.messageText}
                               dialogsData={props.state._state.dialogPage}
                               sendMessage={props.state.sendMessage.bind(props.state)}
                               changeMessageText={props.state.changeMessageText.bind(props.state)}
                               dispatch={props.state.dispatch.bind(props.state)}
                           />}/>
                </div>
                <div className="col-3">
                </div>
            </div>
        </div>
    );
}

export default App;
