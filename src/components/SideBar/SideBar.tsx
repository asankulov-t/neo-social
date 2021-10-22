import React from 'react';
import sidebar from './SideBar.module.css'
import {NavLink} from "react-router-dom";
const SideBar = () => {
    return (
        <div >
            <nav className={`${sidebar.nav} ` }>
                <ul className={sidebar.ul}>
                    <li className={sidebar.li}><NavLink activeClassName={sidebar.active} to="/profile"><i className="fas fa-user"></i><span>Profile</span></NavLink></li>
                    <li className={sidebar.li}><NavLink activeClassName={sidebar.active} to="/messages"><i className="fas fa-envelope"></i><span>Messages</span></NavLink></li>
                    <li className={sidebar.li}><NavLink activeClassName={sidebar.active} to="/news"><i className="fas fa-newspaper"></i><span>News</span></NavLink></li>
                    <li className={sidebar.li}><NavLink activeClassName={sidebar.active} to="/music"><i className="fas fa-music"></i><span>Music</span></NavLink></li>
                    <li className={sidebar.li}><NavLink activeClassName={sidebar.active} to="/setting"><i className="fas fa-tools"></i><span>Setting</span></NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;