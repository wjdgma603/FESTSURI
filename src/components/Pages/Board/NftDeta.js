import React, { useState } from 'react';

const NftDeta = ({ NftData, deleteNft, UpdateNftInfor, ComponentChange }) => {
    const [isEditing, setIsEditing] = useState(false); //수정중인지 완료한상태인지
    const [editedTitle, setEditedTitle] = useState(''); // 타이틀 변경된거 전송하는
    const [editedContent, setEditedContent] = useState(''); // 컨텐츠 변경된거 전송하는

    const onSaveChanges = () => {
        const updatedNftData = {
            ...NftData,
            NftTitle: editedTitle,
            NftContent: editedContent
        };
        UpdateNftInfor(updatedNftData);
        setIsEditing(false); // 수정 완료 후 수정 모드 종료
    };

    const formatDateTime = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = `0${date.getMonth() + 1}`.slice(-2);
        const day = `0${date.getDate()}`.slice(-2);
        const hours = `0${date.getHours()}`.slice(-2);
        const minutes = `0${date.getMinutes()}`.slice(-2);
        const seconds = `0${date.getSeconds()}`.slice(-2);
        return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
    };

    const onEdit = () => {
        setIsEditing(true);
        setEditedTitle(NftData?.NftTitle || '');
        setEditedContent(NftData?.NftContent || '');
    };

    const handleDelete = () => {
        deleteNft(NftData.NftId);
        ComponentChange('NftTap');
    };

    if (!NftData) {
        return <div className="NftDeta">세부 정보를 보려면 항목을 선택하세요.</div>;
    }

    return (
        <div className="NftDeta">
            <h2 className='brd_topTitle'>공지사항</h2>
            <div className="brd_NftIqryDetatop">
                <div className="brd_DetaLeft">
                    <div>
                        <h4>제목 : </h4>
                        {isEditing ? (
                            <input
                                type="text"
                                value={editedTitle}
                                onChange={(e) => setEditedTitle(e.target.value)}
                            />
                        ) : (
                            <h4>{NftData.NftTitle}</h4>
                        )}
                    </div>
                    <ul>
                        <li>
                            <div>작성자</div>
                            <div>{NftData.NftWriter}</div>
                        </li>
                        <li>
                            <div>작성시간</div>
                            <div>{formatDateTime(NftData.NftDay)}</div>
                        </li>
                    </ul>
                </div>
                <div className="brd_DetaRight brd_P">
                    <ul onClick={handleDelete}>
                        <i></i>
                        <li>삭제</li>
                    </ul>
                </div>
            </div>
            <div className="brd_NftIqryDetaText">
                <div className="brd_NftIqrytopImage">
                    {NftData.NftTopimg && <img src={require(`../${NftData.NftTopimg}`)} alt="상단 이미지" />}
                </div>
                {isEditing ? (
                    <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        rows={editedContent.split('\n').length} // 현재 줄 수에 따라 동적으로 높이 설정
                    ></textarea>
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: NftData.NftContent }}></div>
                )}
                <div className="brd_NftIqrybottomImage">
                    {NftData.Nftbottomimg && <img src={require(`../${NftData.Nftbottomimg}`)} alt="하단 이미지" />}
                </div>
            </div>
            <div className="brd_correction brd_P">
                {isEditing ? (
                    <ul onClick={onSaveChanges} className="brd_correction brd_P">
                        <i></i>
                        <li>저장</li>
                    </ul>
                ) : (
                    <ul onClick={onEdit} className="brd_correction brd_P">
                        <i></i>
                        <li>게시물 · 수정</li>
                    </ul>
                )}
            </div>
            <div className="brd_correctionList brd_P">
                <ul onClick={() => ComponentChange('NftTap')}>
                    <i></i>
                    <li>목록</li>
                </ul>
            </div>
        </div >
    );
}

export default NftDeta;