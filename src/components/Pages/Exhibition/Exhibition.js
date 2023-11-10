import React, { useState } from 'react';
import './Exhibition.css';
import Poster from './Comp/Poster.js';
import Poster_comp1 from './Comp/Poster1.json';
import Poster_comp2 from './Comp/Poster2.json';

function Exhibition() {
    const itemsPerPage = 16;
    const [activeTab, setActiveTab] = useState('exhi');
    const [activePage, setActivePage] = useState(0);
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
  
    const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };
    const paginatedPosters = chunkArray(Poster_comp2, itemsPerPage);

    return (
        <div className="Exhibition">
            <section className='exh_top'>
                <h2>전시·공연</h2>
            </section>
            <section className='exh_middle'>
                <ul className='exh_go'>
                    <li><a href='/'>홈</a></li>
                    <li className='exh_arrow'></li>
                    <li><a href='/'>전시·공연</a></li>
                </ul>
                <ul className="exh_menu">
                    <li>
                        <button className={`exh_tab_menu_1 ${activeTab === 'exhi' ? 'active' : ''}`} onClick={() => handleTabClick('exhi')}>전시</button>
                    </li>
                    <li>
                        <button className={`exh_tab_menu_2 ${activeTab === 'show' ? 'active' : ''}`} onClick={() => handleTabClick('show')}>공연</button>
                    </li>
                </ul>
            </section>
            <section id='exhi' className={activeTab === 'exhi' ? 'exh_posters1' : 'exh_DisNone'}>
                <div>
                    {activeTab === 'exhi' && Poster_comp1.map((PosComp) => (
                        <Poster key={PosComp.id} {...PosComp} />
                    ))}
                </div>
                <div className="Exhibition_tapNum">
                    <button className='active'>1</button>
                </div>
            </section>
            <section id='show' className={activeTab === 'show' ? 'exh_posters2' : 'exh_DisNone'}>
                <div>
                    {activeTab === 'show' &&
                        paginatedPosters[activePage].map((PosComp) => (
                            <Poster key={PosComp.id} {...PosComp} />
                        ))
                    }
                </div>
                <div className="Exhibition_tapNum">
                    {paginatedPosters.map((page, index) => (
                        <button
                            key={index}
                            className={activePage === index ? 'active' : ''}
                            onClick={() => setActivePage(index)}
                        >
                            {index + 1}
                            
                        </button>
                        
                    ))}
                </div>
            </section>
        </div>
        
    );
}

export default Exhibition;
