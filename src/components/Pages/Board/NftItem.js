const NftItem = ({ NftId, NftTitle, NftContent, NftDay, NftWriter, }) => {
    return (
        <div className="NftItem">
            <div className="brd_P brd_NftIqryItemNum">{NftId}</div>
            <div className="brd_P brd_NftIqryItemTitle">{NftTitle}</div>
            <div className="brd_P brd_NftIqryItemDay">{NftDay}</div>
        </div>
    );
}

export default NftItem;