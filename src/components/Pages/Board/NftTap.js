import './Nft_style.css';
import Nftitem from './NftItem';
import { Routes, Route, Link, Outlet } from 'react-router-dom';


const NftTap = ({ NftData }) => {
    return (
        <div className='NftTap'>
            <div className='brd_tapAserch'>
                <div className='brd_tap brd_P'>
                    <ul>
                        <li>공지사항</li>
                        <li>문의사항</li>
                        <li>자주하는 질문</li>
                    </ul>
                </div>
                <div className='brd_Search'>
                    <input type='search' placeholder='검색어를 입력해주세요.' />
                    <i className='brd_P'></i>
                </div>
            </div>
            <ul className='brd_NftIqryTitle'>
                <li>번호</li>
                <li>제목</li>
                <li>등록일</li>
            </ul>
            <div>
                {NftData.map((NftDItem) => (
                    <Nftitem
                        key={NftDItem.NftId}
                        {...NftDItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default NftTap;