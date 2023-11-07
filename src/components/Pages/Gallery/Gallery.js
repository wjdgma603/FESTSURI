import './Gallery.css';

import React, { useState } from 'react';
import GallHeader from './GallHeader';
import GallDeps from './GallDeps';
import GallData from './GallDeta.json';

// 페이지네이션
const Gallery = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [activeTab, setActiveTab] = useState(1);  


  //모달창
  const openModal = (data) => {setSelectedData(data);};
  const closeModal = () => {setSelectedData(null);};


// 아이템 갯수 18개를 기준으로 18개가 넘어가면 다음 페이지로
  const renderTabs = (tabNumber) => {
    const startIndex = (tabNumber - 1) * 18;
    const endIndex = tabNumber * 18;


    return GallData.slice(startIndex, endIndex).map((data) => (
      <div key={data.id} className="Gall_GridItem">
        <img src={require(`./images/data_${data.id}.jpg`)} onClick={() => openModal(data)} />
        {selectedData && selectedData.id === data.id && (
          <div className="GallModalTop" onClick={closeModal}>
            <div className="GallModal-Content">
              <img src={require(`./images/data_${data.id}.jpg`)} />
              <h5>{data.usetitle}</h5>
              <div className="GallJsonText" dangerouslySetInnerHTML={{__html: data.useDeta.replace(/\n/g, '<br />'),}}/>
            </div>
          </div>
        )}
      </div>
    ));
  };


  // ------------페이지---------

  const tabItems = [];
  for (let i = 1; i <= Math.ceil(GallData.length / 18); i++) {
    tabItems.push(
      <div
        key={i}
        onClick={() => setActiveTab(i)}
        className={`tab ${activeTab === i ? 'selectedTab' : ''}`}
      >
        {i}
      </div>
    );
  }

  const goToFirstPage = () => {
    setActiveTab(1);
  };

  const goToLastPage = () => {
    setActiveTab(Math.ceil(GallData.length / 18));
  };

  const goToPreviousPage = () => {
    setActiveTab((prevTab) => (prevTab > 1 ? prevTab - 1 : prevTab));
  };

  const goToNextPage = () => {
    setActiveTab((prevTab) =>
      prevTab < Math.ceil(GallData.length / 18) ? prevTab + 1 : prevTab
    );
  };

  const displayFirstAndPrevious =
    activeTab > 3 ? (
      <>
        <div onClick={goToFirstPage}>{'<<'}</div>
        <div onClick={goToPreviousPage}>{'<'}</div>
      </>
    ) : null;



// -------------------


  return (
    <section className="Gallery">

      <article><GallHeader></GallHeader></article>
      <article><GallDeps></GallDeps></article>
 
      <article className="Gall_GridSection">
        <div className="Gall_GridContainer">{renderTabs(activeTab)}</div>
      </article>
     
      <article className='Gall_tab_container'>
        <div className="Gall_tab">
          {displayFirstAndPrevious}
          {tabItems}
          <div onClick={goToNextPage}>{'>'}</div>
          <div onClick={goToLastPage}>{'>>'}</div>
        </div>
      </article>
      
    </section>
  );
};

export default Gallery;