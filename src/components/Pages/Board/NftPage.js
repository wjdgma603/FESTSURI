import './Nft_style.css';

import NoticeItem from './NftItem';

import { Link } from 'react-router-dom';


const NftPage = () => {
    return (
        <div className="BoardAnnouncement">
            <div className="BoardHeader">
                <h5>번호</h5>
                <h5>제목</h5>
                <h5>등록일</h5>
            </div>
            <div>
                <NoticeItem></NoticeItem>
            </div>
            <div className='bottomAnnouncement'>
                <Link to="/board/NftCrt">
                    <i></i>
                    <h4>글 작성</h4>
                </Link>
                <div className="NumberPageTab">
                    <ul>
                        <li><i className='first'></i></li>
                        <li><i className='before'></i></li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li><i className='next'></i></li>
                        <li><i className='back'></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NftPage; 