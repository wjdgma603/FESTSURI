import './Board.css';
import NftTap from './Nft/NftTap'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Board = () => {
    const [NftTitle, setNftTitle] = useState('aa');
    const [NftContent, setNftContent] = useState('aa');
    const [NftItems, setNftItems] = useState([
        {
            NftId: 1,
            NftTitle: '첫 번째 아이템',
            NftContent: '이것은 첫 번째 아이템의 내용입니다.',
            NftDay: new Date().toLocaleDateString(),
            answer: '',
        },
        {
            NftId: 2,
            NftTitle: '두 번째 아이템',
            NftContent: '이것은 두 번째 아이템의 내용입니다.',
            NftDay: new Date().toLocaleDateString(),
            answer: '',
        }
    ]);

    const [editNftItem, setEditNftItem] = useState(null);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);

    const addNftItem = () => {
        if (NftTitle.trim() !== '' && NftContent.trim() !== '') {
            const currentDate = new Date().toLocaleDateString();

            const newItem = {
                NftId: NftItems.length + 1,
                NftTitle,
                NftContent,
                NftDay: currentDate,
                answer: '',
            };

            setNftItems([...NftItems, newItem]);
            setNftTitle('aa'); // 입력한 값 초기화
            setNftContent('aa'); // 입력한 값 초기화
        } else {
            alert('제목과 내용을 입력해주세요.');
        }
    };

    const editingNftItem = (item) => {
        setEditNftItem(item);
        setNftTitle(item.NftTitle);
        setNftContent(item.NftContent);
    };

    const saveEditNftItem = () => {
        const updatedItems = NftItems.map(item =>
            item.NftId === editNftItem.NftId ? { ...item, NftTitle, NftContent } : item
        );
        setNftItems(updatedItems);
        setEditNftItem(null);
        setNftTitle('aa');
        setNftContent('aa');
    };

    const deleteNftItem = (item) => {
        if (deleteConfirmation) {
            const updatedItems = NftItems.filter((i) => i.NftId !== item.NftId);
            setNftItems(updatedItems);
            setDeleteConfirmation(false); // 상태 초기화
        } else {
            setDeleteConfirmation(true); // 삭제 확인 상태 변경
        }
    };

    const cancelNftEdit = () => {
        setEditNftItem(null);
        setNftTitle('aa');
        setNftContent('aa');
        setDeleteConfirmation(false);
    };

    return (
        <div className='Board'>
            <h1 className='BoardHeader'>새로운 아이템 추가하기</h1>
            <div className='linkboxs'>
                <Link to="/board/NftCrt">글작성 링크</Link>
            </div>
            <div>
                <h4>제목:</h4>
                <input type="text" value={NftTitle} onChange={(event) => setNftTitle(event.target.value)} />
            </div>
            <div>
                <h4>내용:</h4>
                <input type="text" value={NftContent} onChange={(event) => setNftContent(event.target.value)} />
            </div>
            {editNftItem ? (
                <div className='bthflexstyle'>
                    <div className='addNftItembtn' onClick={saveEditNftItem}>저장</div>
                    <div className='addNftItembtn' onClick={cancelNftEdit}>취소</div>
                </div>
            ) : (
                <div className='bthflexstyle'>
                    <div className='addNftItembtn' onClick={addNftItem}><i></i>추가</div>
                </div>
            )}
            <NftTap />
            <div>
                <h2>추가된 아이템 목록:</h2>
                <ul>
                    {NftItems.map((item) => (
                        <li key={item.NftId}>
                            <p>ID: {item.NftId}</p>
                            <p>제목: {item.NftTitle}</p>
                            <p>내용: {item.NftContent}</p>
                            <p>등록일: {item.NftDay}</p>
                            {!editNftItem || editNftItem.NftId !== item.NftId ? (
                                <div className='bthflexstyle'>
                                    <button className='addNftItembtn' onClick={() => editingNftItem(item)}>수정</button>
                                    <button className='addNftItembtn' onClick={() => deleteNftItem(item)}>삭제</button>
                                </div>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Board;
