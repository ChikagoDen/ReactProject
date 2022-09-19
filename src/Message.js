import './App.css';
import React from 'react';

// function Message(props) {
function Message({myName}) {
    return (
        <div>
            <p>Добрый время суток, многоуважаемый и горячо любимый</p>
            {/*<h3>{props.myName}</h3>*/}
            <h3>{myName}</h3>
        </div>
    );
}
export default Message;