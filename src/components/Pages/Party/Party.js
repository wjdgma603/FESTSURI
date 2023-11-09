import React, { useState } from 'react';
import './Party.css';
import Party_poster from './Comp/Party_poster';
import Party_comp from './Comp/Party_poster.json';

function Party() {
    const itemsPerPage = 16;
    const [selectedTab, setSelectedTab] = useState(1);

    const totalTabs = Math.ceil(Party_comp.length / itemsPerPage);

    const handleTabClick = (tabIndex) => {
        setSelectedTab(tabIndex);
    };

    const filteredItems = Party_comp.slice(
        (selectedTab - 1) * itemsPerPage,
        selectedTab * itemsPerPage
    );
    return (
        <div className="party">
            <section className='party_top'>
                <h2>행사</h2>
            </section>
            <section className='party_middle'>
                <ul className='party_go'>
                    <li><a>홈</a></li>
                    <li className='party_arrow'></li>
                    <li><a>행사</a></li>
                </ul>
                <section className='party_middle'>
                    <div className="party_poster1">
                        {filteredItems.map((ParComp) => (
                            <Party_poster key={ParComp.id} {...ParComp} />
                        ))}
                    </div>
                    <ul className='party_tapNum'>
                        {[...Array(totalTabs)].map((_, index) => (
                            <li key={index}>
                                <button
                                    className={selectedTab === index + 1 ? 'active' : ''}
                                    onClick={() => handleTabClick(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
            <div></div>
        </div>
    );
}

export default Party;
