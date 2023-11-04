import './Board.css';
import { useState, useRef } from 'react';

import NftjsonData from './NftData.json';
import NftTap from './NftTap';
import NftCrt from './NftCrt';
import NftDeta from './NftDeta';

NftjsonData.sort((a, b) => b.NftId - a.NftId);

const Board = () => {
    // 공지사항 페이지 관련 함수 모음
    const [componentName, setComponentName] = useState('NftTap');
    const [NftData, setNftData] = useState(NftjsonData);

    const ComponentChange = (componentName) => {
        setComponentName(componentName);
    };

    const [selectedNft, setSelectedNft] = useState(null); // 선택한 공지사항에 정보만 저장하는
    const ClickNftInfor = (selectedItem) => {
        setSelectedNft(selectedItem); // 선택된 항목의 세부 정보를 업데이트
    };

    const UpdateNftInfor = (updatedNftData) => {
        const updatedData = NftData.map((item) =>
            item.NftId === updatedNftData.NftId ? updatedNftData : item
        );
        setNftData(updatedData);
        setSelectedNft(updatedNftData);
    };

    //문의사항 페이지 함수모음

    const NftNum = useRef(NftData.length + 1);

    const createNft = (NftTitle, NftContent) => {
        const NftDay = new Date().getTime();
        const NftWriter = "관리자";
        const newNftData = {
            NftWriter,
            NftTitle,
            NftContent,
            NftDay,
            NftId: NftData.length + 1,
        };

        setNftData([newNftData, ...NftData]);
    }; // 생성 함수 

    const deleteNft = (NftId) => {
        const filteredData = NftData.filter(item => item.NftId !== NftId);
        setNftData(filteredData.map((item, index) => ({ ...item, NftId: NftData.length - (index + 1) })));
    };



    return (
        <div className='Board'>
            {componentName === 'NftTap' && <NftTap
                NftData={NftData}
                ClickNftInfor={ClickNftInfor}
                ComponentChange={ComponentChange}
            />}
            {componentName === 'NftCrt' && <NftCrt
                createNft={createNft}
                ComponentChange={ComponentChange}
            />}
            {componentName === 'NftDeta' && <NftDeta
                NftData={selectedNft}
                deleteNft={deleteNft}
                UpdateNftInfor={UpdateNftInfor}
                ComponentChange={ComponentChange}
            />}
        </div>
    );
};

export default Board;
