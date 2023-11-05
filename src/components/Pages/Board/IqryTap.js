import './style.css';
import React, { useState, useEffect } from 'react';
import IqryItem from './IqryItem';

const IqryTap = ({ IqryData, ClickIqryInfor, ComponentChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(null);
    const [savedSearchTerm, setSavedSearchTerm] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTab, setSelectedTab] = useState(1);

    useEffect(() => {
        const totalPagesCount = Math.ceil((filteredData || IqryData).length / 12);
        setTotalPages(totalPagesCount);
    }, [filteredData, IqryData]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterClick = () => {
        if (searchTerm) {
            setSavedSearchTerm(searchTerm);
            const filteredItems = IqryData.filter((item) => {
                return (
                    item.IqryTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.IqryContent.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });
            setFilteredData(filteredItems);
        } else {
            setSavedSearchTerm('');
            setFilteredData(null);
        }
        setCurrentPage(1);
        setSelectedTab(1);
    };

    const renderFilteredItems = () => {
        let itemsToRender = filteredData || IqryData;

        if (savedSearchTerm && itemsToRender.length > 12) {
            itemsToRender = itemsToRender.slice(0, 12);
        }

        return itemsToRender.map((IqryItemIt) => (
            <div
                key={IqryItemIt.IqryId}
                onClick={() => IqryItemSelection(IqryItemIt.IqryId)}
            >
                <IqryItem
                    {...IqryItemIt}
                    ClickIqryInfor={IqryItemSelection}
                />
            </div>
        ));
    };

    const renderItems = () => {
        let currentItems = IqryData;
        currentItems.sort((a, b) => b.IqryId - a.IqryId); // 1번 id를 기준으로 내림차순 정렬
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        currentItems = currentItems.slice(indexOfFirstItem, indexOfLastItem);

        return currentItems.map((IqryItemIt) => (
            <div
                key={IqryItemIt.IqryId}
                onClick={() => IqryItemSelection(IqryItemIt.IqryId)}
            >
                <IqryItem
                    {...IqryItemIt}
                    ClickIqryInfor={IqryItemSelection}
                />
            </div>
        ));
    };

    const itemsPerPage = 12;

    const IqryItemSelection = (IqryId) => {
        const selectedItem = IqryData.find((item) => item.IqryId === IqryId);
        ClickIqryInfor(selectedItem);
        ComponentChange('IqryDeta')
    };

    const changePage = (page) => {
        setCurrentPage(page);
        setSelectedTab(page);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const renderTabNumbers = () => {
        const buttons = [];
        let totalPagesToUse = filteredData ? Math.ceil(filteredData.length / 12) : totalPages;
        let currentPageToUse = filteredData ? 1 : currentPage;
        const maxTabNumbers = totalPagesToUse < 5 ? totalPagesToUse : 5;
        const halfMaxTabs = Math.floor(maxTabNumbers / 2);

        if (totalPagesToUse > maxTabNumbers) {
            if (currentPageToUse > halfMaxTabs + 1) {
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
    };

    return (
        <div className="IqryTap">
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
                    <input type="search" placeholder="검색어를 입력해주세요." value={searchTerm} onChange={handleSearch} />
                    <i className="brd_P" onClick={handleFilterClick}></i>
                </div>
            </div>
            <ul className="brd_NftIqryTitle">
                <li>번호</li>
                <li>제목</li>
                <li>등록일</li>
            </ul>
            <div className='brd_NftIqryMiddle'>
                {(savedSearchTerm || filteredData) ? renderFilteredItems() : renderItems()}
            </div>
            <div className="brd_bottom brd_P">
                <div></div>
                <div>
                    {renderTabNumbers()}
                </div>
                <div onClick={() => ComponentChange('IqryCrt')}>글쓰기</div>
            </div>
        </div>
    );
};

export default IqryTap;
