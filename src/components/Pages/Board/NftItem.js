import './Nft_style.css'

const NftItem = (props) => {
    return (
        <div className="NftItem">
            <div className='NfcNum'>번호</div>
            <div>{props.item}</div>
            <div className='NfcDay'>등록일</div>
        </div>
    );
}

export default NftItem;