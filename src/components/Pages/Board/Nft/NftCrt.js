import './Nft_style.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NftCrt = ({ }) => {

    return (
        <div className="NftCrt">
            <div className='NftlinkBtnHeader'>
                <Link to="/board">메인Board페이지</Link >
            </div>
            이곳에는 수정버튼이 있어서 제목과 내용을 수정할 수 있고
            문의사항 탭에서는 답글을 달 수 있게 하고싶습니다.
        </div>
    );
};

export default NftCrt;