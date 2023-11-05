import './style.css';
import React, { useState } from 'react';
import FAQItem from './FAQItem';

const FAQTap = ({ ComponentChange, FAQData }) => {
    const [openedIndex, setOpenedIndex] = useState(null);

    const handleToggle = (index) => {
        if (index === openedIndex) {
            setOpenedIndex(null);
        } else {
            setOpenedIndex(index);
        }
    };
    return (
        <div className="FAQTap">
            <h2 className="brd_topTitle">게시판</h2>
            <div className="brd_tapAserch">
                <div className="brd_tap brd_P">
                    <ul>
                        <li onClick={() => ComponentChange('NftTap')}>공지사항</li>
                        <li onClick={() => ComponentChange('IqryTap')}>문의사항</li>
                        <li onClick={() => ComponentChange('FAQTap')}>자주하는 질문</li>
                    </ul>
                </div>
                <div className="brd_Search">
                </div>
            </div>
            <div className='brd_FAQMiddle'>
                {FAQData.map((faqItem) => (
                    <FAQItem
                        key={faqItem.FAQId}
                        {...faqItem}
                        isContentOpen={openedIndex === faqItem.FAQId}
                        handleToggle={handleToggle}
                    />
                ))}
            </div>
        </div>
    );
}

export default FAQTap;
