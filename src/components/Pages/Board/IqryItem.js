import React from 'react';

const IqryItem = ({ IqryId, IqryTitle, IqryContent, IqryWriter, IqryDay, Iqryanswer, ClickIqryInfor }) => {
    const handleClick = () => {
        ClickIqryInfor(IqryId);
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = `0${date.getMonth() + 1}`.slice(-2);
        const day = `0${date.getDate()}`.slice(-2);
        return `${year}년 ${month}월 ${day}일`;
    };

    return (
        <div className="NftItem brd_P" onClick={handleClick}>
            <div className="brd_NftIqryItemNum">{IqryId}</div>
            <div className="brd_NftIqryItemTitle">{IqryTitle}</div>
            <div className="brd_NftIqryItemDay">{formatDate(IqryDay)}</div>
        </div>
    );
}

export default IqryItem;
