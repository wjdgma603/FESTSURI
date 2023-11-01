import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NftCrt = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory();

    const addItem = () => {
        if (title.trim() !== '' && content.trim() !== '') {
            const currentDate = new Date().toLocaleDateString();
            const newItem = {
                id: Date.now(),
                title,
                content,
                등록일: currentDate,
            };

            // 아이템 정보를 Board 컴포넌트로 전달
            history.push('/Board', { state: { newItem } });
        } else {
            alert('제목과 내용을 입력해주세요.');
        }
    };

    return (
        <div>
            <h2>새로운 아이템 추가</h2>
            <div>
                <label>제목:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>내용:</label>
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <button onClick={addItem}>추가</button>
        </div>
    );
};

export default NftCrt;
