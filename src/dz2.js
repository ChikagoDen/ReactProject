import './App.css';
import React, { useState } from 'react';


export function MessagesList() {
    const [messages, setMessages] = useState([
        "message 1",
        "message 2",
        "message 3",
    ]);
    return messages.map((message) => <div>{message}</div>);
}

export default MessagesList;