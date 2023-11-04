import './style.css';
import { useState } from 'react';

const IqryCrt = ({ createIqry, ComponentChange }) => {
    const [IqryTitle, setIqryTitle] = useState('');
    const [IqryContent, setIqryContent] = useState('');
    const [IqryWriter, setIqryWriter] = useState('');

    const handleCreateIqry = () => {
        createIqry(IqryTitle, IqryContent, IqryWriter);
        setIqryTitle('');
        setIqryWriter('');
        setIqryContent('');
        ComponentChange('IqryTap');
    };

    return (
        <div className="IqryCrt">
            <h2 className='brd_topTitle'>문의사항 글 작성하기</h2>
            <div className='brd_titleOncheck'>
                <div className='IqryCrtTitle'>
                    <div>
                        <div>제목</div>
                        <input
                            type="text"
                            placeholder="제목을 입력하세요"
                            value={IqryTitle}
                            onChange={(e) => setIqryTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>작성자</div>
                        <input
                            type="text"
                            placeholder="닉네임을 입력하세요"
                            value={IqryWriter}
                            onChange={(e) => setIqryWriter(e.target.value)}
                        />
                    </div>
                </div>
                <div className='brd_CrtBtn'>
                    <div className='brd_P' onClick={() => ComponentChange('IqryTap')}><i></i>돌아가기</div>
                    <button className='brd_P' onClick={handleCreateIqry} ><i></i>글 작성하기</button>
                </div>
            </div>
            <textarea
                placeholder="내용을 입력하세요"
                value={IqryContent}
                onChange={(e) => setIqryContent(e.target.value)}
            ></textarea>
        </div>
    );
};

export default IqryCrt;

