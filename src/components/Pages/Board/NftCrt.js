import './Nft_style.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// createNft
const NftCrt = ({ }) => {
    const navigate = useNavigate();
    const [NftTitle, setNftTitle] = useState('');
    const [NftContent, setNftContent] = useState('');

    const handleCreateNft = () => {
        // createNft(NftTitle, NftContent);
        setNftTitle('');
        setNftContent('');
        navigate('/board');
    };

    return (
        <div className="NftCrt">
            <h2 className='brd_topTitle'>공지사항 글 작성하기</h2>
            <div className='brd_titleOncheck'>
                <input
                    type="text"
                    placeholder="제목을 입력하세요"
                    value={NftTitle}
                    onChange={(e) => setNftTitle(e.target.value)}
                />
                <div className='brd_CrtBtn'>
                    <Link to="/board"><i></i>돌아가기</Link>
                    <button onClick={handleCreateNft}><i></i>글 작성하기</button>
                </div>
            </div>
            <textarea
                placeholder="내용을 입력하세요"
                value={NftContent}
                onChange={(e) => setNftContent(e.target.value)}
            ></textarea>
        </div>
    );
};

export default NftCrt;