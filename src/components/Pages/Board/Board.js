import './Board.css'
import React, { useState } from 'react';
import NftItem from './NftItem';
import { useLocation } from 'react-router-dom';

const Board = () => {
    const [items, setItems] = useState([]);

    const location = useLocation();

    React.useEffect(() => {
        if (location.state && location.state.newItem) {
            setItems([...items, location.state.newItem]);
        }
    }, [location.state]);

    return (
        <div className='Board'>
            <h2>추가된 아이템 목록</h2>
            <div className="item-list">
                {items.map((item) => (
                    <NftItem key={item.id} item={item} />
                ))}
            </div>
            <Link to="/board/NftCrt">
                <i></i>
                <h4>글 작성</h4>
            </Link>
        </div>
    );
};

export default Board;