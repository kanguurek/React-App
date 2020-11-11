import React from 'react';
// import './Input.css';

const input = ( props ) => {

 let validationMessage = 'Text long enough';
    if (props.inputLength <= 5) {
        validationMessage = 'Text too short';
    }

    return (
        <div className="Input">
            <p>{validationMessage}</p>
        </div>
    )
};
export default input;