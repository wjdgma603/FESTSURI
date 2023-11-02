import './Board.css';
import { useState, useRef, useEffect } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import BrdNftTap from './Nft/NftTap';

const Board = () => {
    return (
        <div className='Board'>
            <h2 className='brd_topTitle'>게시판</h2>
            <Routes>
                <Route path='/' element={<BrdNftTap />} />
            </Routes>
        </div>
    );
};

export default Board;