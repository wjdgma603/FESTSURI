import React from 'react';

const GallPagination = ({
  filteredData,
  totalPages,
  currentPage,
  selectedTab,
  changePage,
  handlePrevPage,
  handleNextPage
}) => {
  const renderTabNumbers = () => {
    const buttons = [];
    let totalPagesToUse = filteredData
      ? Math.ceil(filteredData.length / 18)
      : totalPages;
    let currentPageToUse = filteredData ? 1 : currentPage;
    const maxTabNumbers = totalPagesToUse < 5 ? totalPagesToUse : 5;
    const halfMaxTabs = Math.floor(maxTabNumbers / 2);

    if (totalPagesToUse > maxTabNumbers) {
      if (currentPageToUse > halfMaxTabs + 1) {
        buttons.push(
          <div
            className="brd_TapFirstPageBtn"
            key="first"
            onClick={() => changePage(1)}
          >
            <i></i>
          </div>
        );
        buttons.push(
          <div
            className="brd_TapPrevPageBtn"
            key="prev"
            onClick={handlePrevPage}
          >
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
            className={i === selectedTab ? "selected" : ""}
          >
            {i}
          </div>
        );
      }

      if (currentPage < totalPages - halfMaxTabs) {
        buttons.push(
          <div
            className="brd_TapNextPageBtn"
            key="next"
            onClick={handleNextPage}
          >
            <i></i>
          </div>
        );
        buttons.push(
          <div
            className="brd_TapLastPageBtn"
            key="last"
            onClick={() => changePage(totalPages)}
          >
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
            className={i === selectedTab ? "selected" : ""}
          >
            {i}
          </div>
        );
      }
    }

    return buttons;
  };

  return (
    <div className="brd_bottom brd_P">
    <div></div>
    <div>
        {renderTabNumbers()}
    </div>
  
</div>
  );
};

export default GallPagination;