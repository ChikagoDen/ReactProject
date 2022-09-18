import './App.css';
import React, { useState } from 'react';

const library = [
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
    console.log(form);
    const result = library.map((obj) => {
        return (
            <p>
                {Object.keys(obj)[0]}: {obj.text}<br/>
                {Object.keys(obj)[1]}: {obj.author}
            </p>);
    });

    console.log(library);
        const submit = e => {
        e.preventDefault();
        console.log(form.text, form.author);
            library.push(form);
            setForm({
                ...form,
                [e.target.name]: e.target.value
            });
    };
        const update = e => {
             setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    return (
       <div>
           {result}
           <form onSubmit={submit}>
               <label>
                   Имя:
                   <input
                       value={form.text}
                       name="text"
                       onChange={update}
                   />
               </label>

               <label>
                   Пароль:
                   <input
                       value={form.author}
                       name="author"
                       type="text"
                       onChange={update}
                   />
               </label>

               <button>Отправить</button>
           </form>
       </div>

    );



// // Добавление в массив
//     const add = {
//         id: 4,
//         text: 'Кот бегемот пошел гулять',
//         author: 'Зощенко',
//     };
//     let copy = Object.assign([], objArr);
//     copy.push(add);
//     setObjArr(copy);
//
//     // удаление
//     setObjArr(objArr.filter(obj => {
//         if (obj.id != '38GlFQnHM10UuRDNVUdiebjTq') {
//             return obj;
//         }
//     }));



}

export default MessagesList;