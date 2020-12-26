import React, { Component } from 'react';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input style={props.style} type="text" onChange={props.changed} value={props.username}/>
        </div>
    );
}

export default userInput;