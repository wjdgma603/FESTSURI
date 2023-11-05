import './Board.css';
import { useState, useRef } from 'react';

import NftjsonData from './NftData.json';
import NftTap from './NftTap';
import NftCrt from './NftCrt';
import NftDeta from './NftDeta';

import IqryjsonData from './IqryDeta.json';
import IqryTap from './IqryTap';
import IqryCrt from './IqryCrt';
import IqryDeta from './IqryDeta';

import FAQjsonData from './FAQData.json';
import FAQTap from './FAQTap';

NftjsonData.sort((a, b) => b.NftId - a.NftId);

const Board = () => {
    const [componentName, setComponentName] = useState('NftTap');

    const ComponentChange = (componentName) => {
        setComponentName(componentName);
    };

    // 공지사항 페이지 관련 함수 모음
    const [NftData, setNftData] = useState(NftjsonData);

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
    }; // 지우는 함수

    //문의사항 함수 모음
    const [IqryData, setIqryData] = useState(IqryjsonData);

    const [selectedIqry, setSelectedIqry] = useState(null); // 선택한 공지사항에 정보만 저장하는
    const ClickIqryInfor = (selectedItem) => {
        setSelectedIqry(selectedItem); // 선택된 항목의 세부 정보를 업데이트
    };

    const UpdateIqryInfor = (updatedIqryData) => {
        const updatedData = IqryData.map((item) =>
            item.IqryId === updatedIqryData.IqryId ? updatedIqryData : item
        );
        setIqryData(updatedData);
        setSelectedIqry(updatedIqryData);
    };

    const createIqry = (IqryTitle, IqryContent, IqryWriter) => {
        const IqryDay = new Date().getTime();
        const newIqryData = {
            IqryWriter,
            IqryTitle,
            IqryContent,
            IqryDay,
            Iqryanswer: "아직 등록된 답변이 없습니다.",
            IqryId: IqryData.length + 1,
        };

        setIqryData([newIqryData, ...IqryData]);
    }; // 생성 함수

    const deleteIqry = (IqryId) => {
        const filteredData = IqryData.filter(item => item.IqryId !== IqryId);
        setIqryData(filteredData.map((item, index) => ({ ...item, IqryId: IqryData.length - (index + 1) })));
    }; // 지우는 함수

    //자주하는질문 함수 모음
    const [FAQData, setFAQData] = useState(FAQjsonData);


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

            {componentName === 'IqryTap' && <IqryTap
                IqryData={IqryData}
                ClickIqryInfor={ClickIqryInfor}
                ComponentChange={ComponentChange}
            />}
            {componentName === 'IqryCrt' && <IqryCrt
                createIqry={createIqry}
                ComponentChange={ComponentChange}
            />}
            {componentName === 'IqryDeta' && <IqryDeta
                IqryData={selectedIqry}
                deleteIqry={deleteIqry}
                UpdateIqryInfor={UpdateIqryInfor}
                ComponentChange={ComponentChange}
            />}

            {componentName === 'FAQTap' && <FAQTap
                FAQData={FAQData}
                ComponentChange={ComponentChange}
            />}
        </div>
    );
};

export default Board;
