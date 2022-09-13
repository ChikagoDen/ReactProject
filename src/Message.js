import './App.css';
import React from 'react';

// function Message(props) {
function Message({myName}) {
    return (
        <div className="App">
            <header className="App-header">
                Добрый время суток, многоуважаемый и горячо любимый
                {/*<h3>{props.myName}</h3>*/}
                <h3>{myName}</h3>
            </header>
        </div>
    );
}

export default Message;