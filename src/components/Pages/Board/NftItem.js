const NftItem = ({ NftId, NftTitle, NftContent, NftDay, NftWriter, }) => {
    const formattedDate = new Date(NftDay).toLocaleString('kr', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour12: true,
    });
    return (
        <div className="NftItem">
            <div className="brd_P brd_NftIqryItemNum">{NftId}</div>
            <div className="brd_P brd_NftIqryItemTitle">{NftTitle}</div>
            <div className="brd_P brd_NftIqryItemDay">{formattedDate}</div>
        </div>
    );
}

export default NftItem;