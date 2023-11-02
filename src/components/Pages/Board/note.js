import './Board.css';
import React, { useState } from 'react';

const Board = () => {
    const [title, setTitle] = useState('aa');
    const [content, setContent] = useState('aa');
    const [items, setItems] = useState([
        {
            id: 1,
            title: '첫 번째 아이템',
            content: '이것은 첫 번째 아이템의 내용입니다.',
            Day: new Date().toLocaleDateString(),
            answer: '',
        },
        {
            id: 2,
            title: '두 번째 아이템',
            content: '이것은 두 번째 아이템의 내용입니다.',
            Day: new Date().toLocaleDateString(),
            answer: '',
        }
    ]);

    const addItem = () => {
        if (title.trim() !== '' && content.trim() !== '') {
            const currentDate = new Date().toLocaleDateString();

            const newItem = {
                id: items.length + 1,
                title,
                content,
                Day: currentDate,
                answer: '',
            };

            setItems([...items, newItem]);
            setTitle('aa');
            setContent('aa');
        } else {
            alert('제목과 내용을 입력해주세요.');
        }
    };

    return (
        <div className='Board'>
            <h1>새로운 아이템 추가하기</h1>
            <div>
                <label>제목:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>내용:</label>
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <button onClick={addItem}>추가</button>

            <div>
                <h2>추가된 아이템 목록:</h2>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <strong>ID: {item.id}</strong>
                            <p>제목: {item.title}</p>
                            <p>내용: {item.content}</p>
                            <p>등록일: {item.Day}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Board;

