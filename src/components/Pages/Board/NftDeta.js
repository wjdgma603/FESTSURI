import { useParams } from 'react-router-dom';

const NftDeta = ({ NftData }) => {
    const { id } = useParams();
    const selectedNft = NftData.find((item) => item.NftId === parseInt(id, 10));
    const formattedDate = new Date(selectedNft?.NftDay).toLocaleString('kr', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour12: true,
    });

    return (
        <div className="NftDeta">
            <h2 className='brd_topTitle'>{selectedNft?.NftTitle}</h2>
            <div className="brd_NftIqryDetatop">
                <div className="brd_DetaLeft">
                    <div>
                        <h4>제목 : </h4>
                        <h4>{selectedNft?.NftTitle}</h4>
                    </div>
                    <ul>
                        <li>
                            <div>작성자</div>
                            <div>{selectedNft?.NftWriter}</div>
                        </li>
                        <li>
                            <div>작성시간</div>
                            <div>{formattedDate}</div>
                        </li>
                    </ul>
                </div>
                <div className="brd_DetaRight">
                    <ul>
                        <i></i>
                        <li>삭제</li>
                    </ul>
                </div>
            </div>
            <div className="brd_NftIqryDetaText">
                {selectedNft?.NftContent}
            </div>
        </div>
    );
};

export default NftDeta;