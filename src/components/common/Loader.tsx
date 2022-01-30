import React from 'react';
import l from './Loader.module.css'
const Loader = () => {
    return (
        <div className={l.loader}>
            <img src={'https://homehardware.sirv.com/resources/images/loading-image.gif'} alt=""/>
        </div>
    );
};

export default Loader;