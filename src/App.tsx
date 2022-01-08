import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";

// type DialogType = {
//     id: number
//     name: string
// }
// type MessageType = {
//     id: number
//     message: string
// }
// type DialogsTypes = {
//     messageText: string
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
// }
//
// type PostDataType = {
//     id: number
//     post: string
//     likeCount: number
//     dislike: number
// }
//
// type ProfilePageTypes = {
//     newPostText: string
//     posts: Array<PostDataType>
// }
//
// type StateData = {
//     dialogReducer: DialogsTypes
//     profileReducer: ProfilePageTypes
// }
//
//
// type AppTypes = {
//     state: StateData
//     dispatch: (action: ActionType) => void
//}
// postData={props.state.profileReducer.posts}
// dispatch={props.dispatch.bind(props.state)}
// newPostText={props.state.profileReducer.newPostText}

// text={props.state.dialogReducer.messageText}
// dispatch={props.dispatch.bind(props.state)}
// dialogsData={props.state.dialogReducer}

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={'row'}>
                <div className={'col-3 fixed-left'}>
                    <SideBar/>
                </div>
                <div className="col-6">
                    <Route path={'/profile'}
                           render={() => <Profile
                           />}/>
                    <Route path={'/messages'}
                           render={() => <DialogsContainer
                           />}/>
                    <Route path={'/users'}
                           render={() => <Users
                           />}/>
                </div>
                <div className="col-3">
                </div>
            </div>
        </div>
    );
}

export default App;
