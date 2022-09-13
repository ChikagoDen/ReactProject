import React from 'react';

function Message(props) {
    return (
        <div className="App">
            <header className="App-header">
                My First React App
                <h3>Hello, {props.myName}</h3>
            </header>
        </div>
    );
}

export default Message;