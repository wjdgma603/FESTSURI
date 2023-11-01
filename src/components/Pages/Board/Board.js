import React, { useState } from 'react';
import './Board.css';

import BoardAnnouncement from "./Notice/BoardAnnouncement";

const Board = () => {
    const blueSelec = document.querySelector('.blueSelec');
    const blueSelecTabs = document.querySelector('.blueSelecTabs');
    const blueSelecOne = () => {
        blueSelec.style.width = '133.61px';
        blueSelec.style.marginLeft = '0px';
        blueSelecTabs.style.marginLeft = '0px';
    };
    const blueSelecTwo = () => {
        blueSelec.style.width = '133.61px';
        blueSelec.style.marginLeft = '133.61px';
        blueSelecTabs.style.marginLeft = '-133.61px';
    };
    const blueSelecThree = () => {
        blueSelec.style.width = '174.89px';
        blueSelec.style.marginLeft = '267.22px';
        blueSelecTabs.style.marginLeft = '-267.22px';
    };
    return (
        <section className="Board">
            <div className="noticeBoard">
                <h2>게시판</h2>
            </div>
            <div className='TabSearch'>
                <div className='Tab'>
                    <ul>
                        <li onClick={blueSelecOne}>공지사항</li>
                        <li onClick={blueSelecTwo}>문의사항</li>
                        <li onClick={blueSelecThree}>자주하는 질문</li>
                    </ul>
                    <div className='blueSelec'>
                        <ul className='blueSelecTabs'>
                            <li>공지사항</li>
                            <li>문의사항</li>
                            <li>자주하는 질문</li>
                        </ul>
                    </div>
                </div>
                <div className='Search'>
                    <input type='Search' placeholder='검색어를 입력하세요.' />
                    <i></i>
                </div>
            </div>
            <BoardAnnouncement />
        </section>
    );
}

export default Board;