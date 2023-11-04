
import { useRef } from 'react';
import { Link } from 'react-router-dom';


const MainTitleWrap = ({ItemTitle, ItemSubTitle, ItemLink, ItemEndPoint}) => {
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
                        <svg className='Main_Item_ArrowStroke' viewBox="0 0 60 3" fill="none">
                            <line className='Main_Item_ArrowLine' y1="1.37988" x2="60" y2="1.37988" stroke="black" stroke-width="2"/>
                        </svg>
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
                            <path className='Main_Item_ArrowHead' d="M8.70711 8.08699C9.09763 7.69647 9.09763 7.0633 8.70711 6.67278L2.34315 0.308815C1.95262 -0.0817094 1.31946 -0.0817094 0.928932 0.308815C0.538408 0.699339 0.538408 1.3325 0.928932 1.72303L6.58579 7.37988L0.928932 13.0367C0.538408 13.4273 0.538408 14.0604 0.928932 14.451C1.31946 14.8415 1.95262 14.8415 2.34315 14.451L8.70711 8.08699ZM7 8.37988H8V6.37988H7V8.37988Z" fill="black"/>
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