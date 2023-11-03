import './Board.css';
import { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom'
import jsonData from './NftData.json';
import NftTap from './NftTap';
import NftCrt from './NftCrt';
import NftDeta from './NftDeta';
import NftItem from './NftItem';

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
                <Route path="/" element={<NftTap NftData={NftData} />} />
                <Route path="/details/:id" element={<NftDeta NftData={NftData} />} />
            </Routes>
            <NftCrt createNft={createNft} />
        </div>
    );
};

export default Board;