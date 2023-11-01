import './NoticesAndInquiries.css';

import NoticeItem from './NoticeItem';
import NumberPageTab from './NumberPageTab';

import { Link } from 'react-router-dom';


const BoardAnnouncement = () => {
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
                <Link to="/notice-create">
                    <button>
                        <i></i>
                        <h4>글 작성</h4>
                    </button>
                </Link>
                <NumberPageTab></NumberPageTab>
            </div>
        </div>
    );
}

export default BoardAnnouncement; 