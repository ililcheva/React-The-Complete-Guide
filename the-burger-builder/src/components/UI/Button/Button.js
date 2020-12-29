import React from 'react';

import classes from './Button.css';

const button = ({clicked, children, btnType}) => (
    <button 
        className={[classes.Button, classes[btnType]].join(' ')}
        onClick={clicked}>{children}</button>
);

export default button;