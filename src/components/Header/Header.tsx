import React from 'react';
import header from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={`${header.header} fixed-top`}>
            <NavLink to="#"><h2>NEO</h2></NavLink>
            <NavLink to="#">last posts</NavLink>
            <nav className={header.nav}>
                <ul className={header.ul}>
                    <li className={header.li}><NavLink to="#">sing in</NavLink></li>
                    <li className={header.li}><NavLink to="#">login</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;