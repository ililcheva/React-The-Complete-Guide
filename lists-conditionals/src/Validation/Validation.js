import React from 'react';

const validation = (props) => {
    let displayedText = null;

    if (props.textLength <= 5) {
        displayedText = "Text too short!";
    } else if (props.textLength >= 20) {
        displayedText = "Text too long!";
    }

    return (
        <p>{displayedText}</p>
    );
}

export default validation;