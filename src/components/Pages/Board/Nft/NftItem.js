// NftItem.js
import React from 'react';

const NftItem = ({ item }) => {
    return (
        <div className="NftItem">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            {/* 다른 아이템 정보를 표시하는 요소들을 추가할 수 있습니다. */}
        </div>
    );
};

export default NftItem;