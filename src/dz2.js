import './App.css';
import React, { useState, useEffect } from 'react';


export function MessagesList() {
    const [messagesList, setMessagesList] = useState([]);
    let [form, setForm] = useState({
        text: '',
        author: '',
        id:'',
    });
    const handleSubmit = e => {
        e.preventDefault();
        setMessagesList(prevState => [...prevState,{
            id:messagesList.length,
            text:form.text,
            author:form.author,
        }]);
    };
    const handleUpdateInput = e => {
        setForm({...form,[e.target.name]: e.target.value});
    };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Текст:
                    <input value={form.text} name="text" onChange={handleUpdateInput}/>
                </label>
                <br/>
                <label>
                    Автор:
                    <input value={form.author} name="author" type="text" onChange={handleUpdateInput}/>
                </label>
                <br/>
                <button >Отправить</button>
            </form>
            {messagesList.map(message =>{
                return(
                    <div>
                        <p>{message.text}</p>
                        <p>Автор:{message.author}</p>
                    </div>
                )
            })}
        </div>
    )



//     return (
//        <div>
//            {result}
//            <form>
//                <label>
//                    Текст:
//                    <input
//                        value={form.text}
//                        name="text"
//                        onChange={update}
//                    />
//                </label>
// <br/><br/>
//                <label>
//                    Автор:
//                    <input
//                        value={form.author}
//                        name="author"
//                        type="text"
//                        onChange={update}
//                    />
//                </label>
// <br/><br/>
//                <button onClick={submit}>Отправить</button>
//            </form>
//        </div>
//     );
}

export default MessagesList;