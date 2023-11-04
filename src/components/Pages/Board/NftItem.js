import React from 'react';

const NftItem = ({ NftId, NftTitle, NftContent, NftDay, NftWriter, ClickNftInfor }) => {
    const handleClick = () => {
        ClickNftInfor(NftId);
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = `0${date.getMonth() + 1}`.slice(-2);
        const day = `0${date.getDate()}`.slice(-2);
        return `${year}년 ${month}월 ${day}일`;
    };

    return (
        <div className="NftItem" onClick={handleClick}>
            <div className="brd_P brd_NftIqryItemNum">{NftId}</div>
            <div className="brd_P brd_NftIqryItemTitle">{NftTitle}</div>
            <div className="brd_P brd_NftIqryItemDay">{formatDate(NftDay)}</div>
        </div>
    );
}

export default NftItem;
