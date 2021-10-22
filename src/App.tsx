import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialogs/Dialog";
import { Route } from 'react-router-dom';


function App() {
    const [dialogShow, setDialogShow]=useState(true)
  return (
    <div className="App">
        <Header/>
        <div className={'row'}>
            <div className={'col-3 fixed-left'}>
                {/*{dialogShow?<Dialog/>:<SideBar/>}*/}
                <SideBar/>
            </div>
            <div className="col-6">
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/messages'} component={Dialog}/>


            </div>
            <div className="col-3">
            </div>
        </div>
    </div>
  );
}

export default App;
