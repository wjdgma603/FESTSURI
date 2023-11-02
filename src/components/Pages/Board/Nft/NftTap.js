import './Nft_style.css'

const NftTap = () => {
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
        </div>
    );
};

export default NftTap;