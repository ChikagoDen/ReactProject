import './App.css';
import React, { useState, useEffect } from 'react';

let library = [
    {
        text: 'Тише и ыфсьдл луать ',
        author: 'Толстой',
    },
    {
        text: 'А',
        author: 'Пушкин',

    },
    {
        text: 'Кот',
        author: 'Лермонтов',
    }
];

export function MessagesList() {
    let [form, setForm] = useState({
        text: '',
        author: ''
    });

    const result = library.map((obj) => {
        return (
            <p>
                Текст: {obj.text}<br/>
                Автор: {obj.author}
            </p>);
    });
    const submit = e => {
        e.preventDefault();
        library.push(form);
        setForm({...form,[e.target.name]: e.target.value });
    };
    const update = e => {
        setForm({...form,[e.target.name]: e.target.value});
    };


    function handleAlertClick() {
        setTimeout(() => {alert('Вы отправили сообщение!!!');}, 1500);
    }

useEffect(()=>handleAlertClick(),[library.length]);

    return (
       <div>
           {result}
           <form>
               <label>
                   Текст:
                   <input
                       value={form.text}
                       name="text"
                       onChange={update}
                   />
               </label>
<br/><br/>
               <label>
                   Автор:
                   <input
                       value={form.author}
                       name="author"
                       type="text"
                       onChange={update}
                   />
               </label>
<br/><br/>
               <button onClick={submit}>Отправить</button>
           </form>
       </div>
    );
}

export default MessagesList;