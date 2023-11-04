import './Nft_style.css';
import React, { useState } from 'react';
import NftItem from './NftItem';

const NftTap = ({ NftData, ClickNftInfor, ComponentChange }) => {
    const itemsPerPage = 12; // 페이지 당 아이템 수
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTab, setSelectedTab] = useState(1);

    const totalPages = Math.ceil(NftData.length / itemsPerPage); // 페이지에 나오는 아이템은 12개씩으로

    const NftItemSelection = (NftId) => {
        const selectedItem = NftData.find((item) => item.NftId === NftId);
        ClickNftInfor(selectedItem);
        ComponentChange('NftDeta')
    }; // 클릭한 아이템의 내용을 디테일 페이지로 정보를 넘겨주는

    const changePage = (page) => {
        setCurrentPage(page);
        setSelectedTab(page);
    }; // 하단 탭전환 함수

    const renderItems = () => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = NftData.slice(indexOfFirstItem, indexOfLastItem);

        return currentItems.map((NftItemIt) => (
            <div
                key={NftItemIt.NftId}
                onClick={() => NftItemSelection(NftItemIt.NftId)}
            >
                <NftItem
                    {...NftItemIt}
                    ClickNftInfor={NftItemSelection}
                />
            </div>
        ));
    }; // 전달하는 데이터를 선별하는 함수

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const maxTabNumbers = 5; // 최대 5개의 탭을 표시

    const buttons = [];
    const halfMaxTabs = Math.floor(maxTabNumbers / 2);

    const renderTabNumbers = () => {
        const buttons = [];

        if (totalPages > maxTabNumbers) {
            if (currentPage > halfMaxTabs + 1) {
                buttons.push(
                    <div className='brd_TapFirstPageBtn' key="first" onClick={() => changePage(1)}>
                        <i></i>
                    </div>
                );
                buttons.push(
                    <div className='brd_TapPrevPageBtn' key="prev" onClick={handlePrevPage}>
                        <i></i>
                    </div>
                );
            }

            let start = 1;
            let end = maxTabNumbers;

            if (currentPage > halfMaxTabs) {
                if (currentPage + halfMaxTabs < totalPages) {
                    start = currentPage - halfMaxTabs;
                    end = currentPage + halfMaxTabs;
                } else {
                    end = totalPages;
                    start = totalPages - maxTabNumbers + 1;
                }
            }

            for (let i = start; i <= end; i++) {
                buttons.push(
                    <div
                        key={i}
                        onClick={() => changePage(i)}
                        className={i === selectedTab ? 'selected' : ''}
                    >
                        {i}
                    </div>
                );
            }

            if (currentPage < totalPages - halfMaxTabs) {
                buttons.push(
                    <div className='brd_TapNextPageBtn' key="next" onClick={handleNextPage}>
                        <i></i>
                    </div>
                );
                buttons.push(
                    <div className='brd_TapLastPageBtn' key="last" onClick={() => changePage(totalPages)}>
                        <i></i>
                    </div>
                );
            }
        } else {
            for (let i = 1; i <= totalPages; i++) {
                buttons.push(
                    <div
                        key={i}
                        onClick={() => changePage(i)}
                        className={i === selectedTab ? 'selected' : ''}
                    >
                        {i}
                    </div>
                );
            }
        }

        return buttons;
    }; // 하단 탭 버튼 기능 관련 코드 5개의 탭까지만 나오며 4번이상부터 다음탭이 연동된다.


    return (
        <div className="NftTap">
            <h2 className="brd_topTitle">게시판</h2>
            <div className="brd_tapAserch">
                <div className="brd_tap brd_P">
                    <ul>
                        <li>공지사항</li>
                        <li>문의사항</li>
                        <li>자주하는 질문</li>
                    </ul>
                </div>
                <div className="brd_Search">
                    <input type="search" placeholder="검색어를 입력해주세요." />
                    <i className="brd_P"></i>
                </div>
            </div>
            <ul className="brd_NftIqryTitle">
                <li>번호</li>
                <li>제목</li>
                <li>등록일</li>
            </ul>
            <div className='brd_NftIqryMiddle'>
                {renderItems()}
            </div>
            <div className="brd_Nftbottom brd_P">
                <div></div>
                <div>
                    {renderTabNumbers()}
                </div>
                <div onClick={() => ComponentChange('NftCrt')} >글쓰기</div>
            </div>
        </div>
    );
};

export default NftTap;
