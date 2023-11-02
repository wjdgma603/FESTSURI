import './Board.css';
import { useState, useRef, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import jsonData from './NftData.json';
import NftTap from './NftTap';
import NftCrt from './NftCrt';

jsonData.sort((a, b) => b.NftId - a.NftId);

const Board = () => {
    const [NftData, setNftData] = useState(jsonData);
    const NftNum = useRef(NftData.length);
    const createNft = (NftTitle, NftContent) => {
        const NftDay = new Date().getTime();
        const NftWriter = "관리자";
        const newNftData = {
            NftWriter,
            NftTitle,
            NftContent,
            NftDay,
            NftId: NftNum.current,
        };
        NftNum.current += 1;
        setNftData([newNftData, ...NftData]);
    };
    return (
        <div className='Board'>
            <h2 className='brd_topTitle'>게시판</h2>
            <Routes>
                <Route path='/' element={<NftTap NftData={NftData} />} />
            </Routes>
            <Link to="NftCrt">글작성 페이지</Link>
        </div>
    );
};

export default Board;
