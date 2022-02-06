import React from 'react';
import header from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOutThunk} from "../../redux/AuthReducer";
import {StateData} from "../../types/Types";

const Header = () => {

    let dispatch = useDispatch()
    // let aut=true
    // useEffect(()=>{
    //    dispatch(getAuthThunk(aut))
    // },[aut])
    let headerData = useSelector((state: StateData) => state.AuthReducer)
    let logOut = () => {
        dispatch(logOutThunk())
    }
    return (
        <header className={`${header.header} fixed-top`}>
            <NavLink to="#"><h2>NEO</h2></NavLink>
            <nav className={header.nav}>
                <ul className={header.ul}>
                    <li className={header.li}><NavLink to="login">{
                        headerData.isAuth === true ? headerData.login :
                            <span><i className="fas fa-sign-out-alt"></i></span>
                    }</NavLink></li>
                    <li className={header.li}><NavLink to={headerData.isAuth?'profile':'login'}>{
                        headerData.isAuth === true ?
                            <span onClick={logOut}><i className="fas fa-running"></i></span> : 'login'
                    }</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;