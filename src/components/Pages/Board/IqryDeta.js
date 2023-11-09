import './style.css';
import React, { useState } from 'react';

const IqryDeta = ({ IqryData, deleteIqry, UpdateIqryInfor, ComponentChange }) => {
    const [isEditing, setIsEditing] = useState(false); //수정중인지 완료한상태인지
    const [editedTitle, setEditedTitle] = useState(''); // 타이틀 변경된거 전송하는
    const [editedContent, setEditedContent] = useState(''); // 컨텐츠 변경된거 전송하는

    const [isAEditing, setIsAEditing] = useState(false); // 답변 수정중인지 완료한상태인지
    const [editedAnswer, setEditedAnswer] = useState(''); // 답변 변경된거 전송하는

    const onSaveChanges = () => {
        const updatedIqryData = {
            ...IqryData,
            IqryTitle: editedTitle,
            IqryContent: editedContent
        };
        UpdateIqryInfor(updatedIqryData);
        setIsEditing(false); // 수정 완료 후 수정 모드 종료
    };

    const onAnsSaveChanges = () => {
        const updatedIqryData = {
            ...IqryData,
            Iqryanswer: editedAnswer // 변경: 답변 상태 수정
        };
        UpdateIqryInfor(updatedIqryData);
        setIsAEditing(false); // 수정 완료 후 수정 모드 종료
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
        setEditedTitle(IqryData?.IqryTitle || '');
        setEditedContent(IqryData?.IqryContent || '');
    };
    const onAEdit = () => {
        setIsAEditing(true);
        setEditedAnswer(IqryData?.Iqryanswer || '');
    };

    const handleDelete = () => {
        deleteIqry(IqryData.IqryId);
        ComponentChange('IqryTap');
    };

    const handleAnswerDelete = () => {
        const updatedIqryData = {
            ...IqryData,
            Iqryanswer: "등록된 답변이 없습니다."
        };
        UpdateIqryInfor(updatedIqryData);
    };

    if (!IqryData) {
        return <div className="IqryDeta">세부 정보를 보려면 항목을 선택하세요.</div>;
    }

    return (
        <div className="IqryDeta">
            <h2 className='brd_topTitle'>문의사항</h2>
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
                            <h4>{IqryData.IqryTitle}</h4>
                        )}
                    </div>
                    <ul>
                        <li>
                            <div>작성자</div>
                            <div>{IqryData.IqryWriter}</div>
                        </li>
                        <li>
                            <div>작성시간</div>
                            <div>{formatDateTime(IqryData.IqryDay)}</div>
                        </li>
                    </ul>
                </div>
                <div className="brd_DetaRight brd_P">
                    <div className="brd_correction brd_P">
                        {isEditing ? (
                            <ul onClick={onSaveChanges} className="brd_P">
                                <i></i>
                                <li>저장</li>
                            </ul>
                        ) : (
                            <ul onClick={onEdit} className="brd_P">
                                <i></i>
                                <li>게시물 · 수정</li>
                            </ul>
                        )}
                    </div>
                    <ul onClick={handleDelete}>
                        <i></i>
                        <li>삭제</li>
                    </ul>
                </div>
            </div>
            <div className="brd_NftIqryDetaText">
                {isEditing ? (
                    <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        rows={editedContent.split('\n').length}
                    ></textarea>
                ) : (
                    <p>{IqryData.IqryContent}</p>
                )}
            </div>
            <div className='brd_IqryAnswer'>
                <h4>문의 답변</h4>
                {isAEditing ? (
                    <textarea
                        value={editedAnswer} // 수정: editedAnswer로 변경
                        onChange={(e) => setEditedAnswer(e.target.value)}
                        rows={editedAnswer.split('\n').length} // 수정: setEditedAnswer로 변경
                    ></textarea>
                ) : (
                    <p>{IqryData.Iqryanswer}</p>
                )}
                <div>
                    {isAEditing ? (
                        <ul onClick={onAnsSaveChanges} className="brd_P">
                            <i></i>
                            <li>저장</li>
                        </ul>
                    ) : (
                        <ul onClick={onAEdit} className="brd_P">
                            <i></i>
                            <li>답변 등록 · 수정</li>
                        </ul>
                    )}
                    <ol onClick={handleAnswerDelete} className="brd_P">
                        <i></i>
                        <li>답변 삭제</li>
                    </ol>
                </div>
            </div>
            <div className="brd_correctionList brd_P">
                <ul onClick={() => ComponentChange('IqryTap')}>
                    <i></i>
                    <li>목록</li>
                </ul>
            </div>
        </div>
    );
}

export default IqryDeta;