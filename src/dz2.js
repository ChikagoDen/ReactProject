import './App.css';
import React, { useState } from 'react';

const library = [
    {
        id: 1,
        text: 'Тише и ыфсьдл луать ',
        author: 'Толстой',
    },
    {
        id: 2,
        text: 'А',
        author: 'Пушкин',

    },
    {
        id: 3,
        text: 'Кот',
        author: 'Лермонтов',

    }
];

export function MessagesList() {
    let [objArr, setObjArr] = useState(library);
    let [text,setText]=useState('');
    let [author,setAuthor]=useState('');
    console.log(objArr[0].text);
    const result = objArr.map((obj) => {
        return (
            <p key={obj.id}>
                {obj.id} {Object.keys(obj)[1]}: {obj.text}<br/>
                {Object.keys(obj)[2]}: {obj.author}
            </p>);
    });

    return(
    <div>
        <p>Вывод массива объектов</p>
        {result}
        <p> Как запихнуть в массив объектов не могу догнать</p>
        текст<input value={text} onChange={(event)=>setText(event.target.value)}/>
        <p>{text}</p>
        автор<input value={author} onChange={(event)=>setAuthor(event.target.value)}/>
        <p>{author}</p>
        <button onClick={()=>setText(text)}>Отправить</button>
        как в кнопку запихнуть автора?
    </div>);


// Добавление в массив
    const add = {
        id: 4,
        text: 'Кот бегемот пошел гулять',
        author: 'Зощенко',
    };
    let copy = Object.assign([], objArr);
    copy.push(add);
    setObjArr(copy);

    // удаление
    setObjArr(objArr.filter(obj => {
        if (obj.id != '38GlFQnHM10UuRDNVUdiebjTq') {
            return obj;
        }
    }));



}

export default MessagesList;