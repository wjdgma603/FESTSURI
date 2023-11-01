import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nft_style.css';

const NftCrt = ({ onNftItemAdd }) => {
    const [NftTitle, setNftTitle] = useState('');

    const addNftItem = () => {
        // 새로운 아이템 생성
        const newItem = {
            id: onNftItemAdd.length + 1, // ID (1 증가)
            title: NftTitle, // 제목
            date: new Date().toDateString(), // 현재 날짜
        };

        onNftItemAdd(newItem); // 새 아이템 추가
        // 추가 후에 어떤 작업을 수행할 수 있습니다. (예: 페이지 이동)
    };

    return (
        <div className="NftCrt">
            <div className="BoardHeader">
                <h2>게시판 글 쓰기</h2>
            </div>
            <div className='NftCrtTop'>
                <ul>
                    <li>
                        <h4>제목</h4>
                        <input value={NftTitle} type='text' onChange={(event) => setNftTitle(event.target.value)} placeholder='제목을 입력해주세요.' />
                    </li>
                    <li>
                    </li>
                </ul>
                <ol>
                    <Link to="/board">
                        <li>
                            <i></i>
                            <h4>돌아가기</h4>
                        </li>
                    </Link>
                    <Link to="/board">
                        <li>
                            <i></i>
                            <h4>글 작성</h4>
                        </li>
                    </Link>
                </ol>
            </div>
        </div>
    );
}

export default NftCrt;
