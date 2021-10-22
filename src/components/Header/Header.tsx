import React from 'react';
import header from './Header.module.css'
const Header = () => {
    return (
        <header className={`${header.header} fixed-top`}>
            <a href=""><h2>NEO</h2></a>
            <a href="">last posts</a>
            <nav className={header.nav}>
                <ul className={header.ul}>
                    <li className={header.li}><a href="">sing in</a></li>
                    <li className={header.li}><a href="">login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;