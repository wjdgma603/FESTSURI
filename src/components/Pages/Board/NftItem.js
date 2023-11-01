import './Nft_style.css';

const NftItem = ({ item }) => {
    return (
        <div className="NftItem">
            <div className='NfcNum'>{item.id}</div>
            <div>{item.title}</div>
            <div className='NfcDay'>{item.등록일}</div>
        </div>
    );
}

export default NftItem;
