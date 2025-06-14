import React from 'react';

import Infinity from '../Gif/Infinity.gif'

const Loader = () => {
    return (
        <div>
            <img src={Infinity} alt='Loading'/>
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loader;