import React from 'react';

const FAQItem = ({ FAQId, FAQTitle, FAQContent, FAQWriter, isContentOpen, handleToggle }) => {

    const toggleContent = () => {
        handleToggle(FAQId);
    };

    return (
        <div className="FAQItem brd_P">
            <div className="brd_FAQItemTitle" onClick={toggleContent}>
                <div>
                    <h2>Q.</h2>
                    {FAQTitle}
                </div>
                <i style={{ transform: isContentOpen ? 'rotate(135deg)' : 'rotate(-45deg)' }}></i>
            </div>
            <ul className='FAQItemUl' style={{ maxHeight: isContentOpen ? '400px' : '0' }}>
                <li>
                    <div className="brd_FAQContent"><h2>A.</h2>{FAQContent}</div>
                </li>
                <li>
                    <div className="brd_FAQWriter">{FAQWriter}</div>
                </li>
            </ul>
        </div>
    );
};

export default FAQItem;
