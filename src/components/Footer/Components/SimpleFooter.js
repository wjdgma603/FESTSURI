import { Link } from "react-router-dom";


const SimpleFooter = () => {
    return ( 
        <footer className="SimpleFooter">
            <ul className="SimpleFooter_NoticeWrap">
                <li><Link to=''>회사소개</Link></li>
                <li className="BoldNotice"><Link to=''>개인정보 처리방침</Link></li>
                <li><Link to=''>이용약관</Link></li>
                <li><Link to=''>저작권정책</Link></li>
                <li><Link to=''>영상정보처리기기 운영 · 관리방침</Link></li>
                <li><Link to=''>이메일 무단수집 금지</Link></li>
            </ul>
            <article className="SimpleFooter_CopyrightSection">
                <p>Copyright ⓒ 2023 FESTSURI All rights reserved.</p>
            </article>
        </footer>
     );
}
 
export default SimpleFooter;