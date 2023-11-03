import { Link } from 'react-router-dom';


const MainTitleWrap = ({ItemTitle, ItemSubTitle, ItemLink, ItemEndPoint, Arrow}) => {
    return ( 
        <article className="Main_TitleWrap">
            <div className="Item_Title">
                <div className='Item_MainTitle'>{ItemTitle}</div>
                <div className='Item_SubTitle'>{ItemSubTitle}</div>
            </div>
            {ItemEndPoint ? 
            <div className="Item_Link">
                <Link to={ItemLink}>
                    <div className='Item_LinkTitle'>{ItemEndPoint}</div>
                    <div className='Link_ArrowPoint'>
                        <svg width="62" height="16" viewBox="0 0 62 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60 9H0V7H60V9Z" fill="black"/>
                            <path d="M61.7071 8.70711C62.0976 8.31658 62.0976 7.68342 61.7071 7.29289L55.3431 0.928932C54.9526 0.538408 54.3195 0.538408 53.9289 0.928932C53.5384 1.31946 53.5384 1.95262 53.9289 2.34315L59.5858 8L53.9289 13.6569C53.5384 14.0474 53.5384 14.6805 53.9289 15.0711C54.3195 15.4616 54.9526 15.4616 55.3431 15.0711L61.7071 8.70711ZM60 9H61V7H60V9Z" fill="black"/>
                        </svg>
                    </div>
                </Link>
            </div>
            :
            null
            }
        </article>
     );
}
 
export default MainTitleWrap;