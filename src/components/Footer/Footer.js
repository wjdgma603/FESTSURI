import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return ( 
        <footer className="Footer">
            <section className="Footer_Wrap">
                <article className="Footer_FirstWrap">
                    <div className="Footer_Logo">
                        <svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 200 35.7">
                            <path d="M20.2,21.7H12v11.1H2.4v-30h19.7l-1.2,7.7H12v4h8.2V21.7z"/>
                            <path d="M44.2,21.5h-9.6v3.6h11.8v7.7H25v-30h21.1l-1.2,7.7H34.6v4h9.6C44.2,14.5,44.2,21.5,44.2,21.5z"/>
                            <path d="M49.2,32.3l1.4-7.9c2.9,0.7,5.6,1.1,8,1.1c1.2,0,2.3,0,3.2-0.1c0.9,0,1.7-0.1,2.5-0.2v-2.4L60,22.4c-1.9-0.2-3.6-0.5-4.9-1c-1.3-0.5-2.4-1.1-3.1-1.9c-0.8-0.8-1.3-1.7-1.7-2.8c-0.3-1.1-0.5-2.4-0.5-3.9c0-2.1,0.2-3.8,0.6-5.1c0.4-1.4,1.1-2.5,2-3.3S54.5,3,56,2.6c1.5-0.3,3.3-0.5,5.4-0.5c4.2,0,8.1,0.4,11.5,1.2L71.7,11c-3-0.5-5.4-0.7-7.2-0.7c-1.8,0-3.3,0.1-4.6,0.2v2.4l3.4,0.3c2.1,0.2,3.9,0.6,5.3,1.1s2.6,1.1,3.4,1.9c0.9,0.8,1.5,1.7,1.8,2.8c0.4,1.1,0.5,2.3,0.5,3.8c0,2-0.3,3.7-0.8,5.1c-0.5,1.4-1.2,2.4-1.9,3.2c-0.6,0.6-1.4,1-2.3,1.4c-0.9,0.3-1.9,0.6-2.9,0.7c-1,0.2-2,0.3-3.1,0.3c-1,0-2,0.1-2.8,0.1c-2.1,0-4.1-0.1-6-0.3C52.8,33,51,32.7,49.2,32.3z"/>
                            <path d="M99.4,10.5h-7v22.3h-9.6V10.5h-7V2.8h23.5L99.4,10.5L99.4,10.5z"/>
                            <path d="M100.9,32.3l1.4-7.9c2.9,0.7,5.6,1.1,8,1.1c1.2,0,2.3,0,3.2-0.1s1.7-0.1,2.5-0.2v-2.4l-4.3-0.4c-1.9-0.2-3.6-0.5-4.9-1s-2.4-1.1-3.1-1.9c-0.8-0.8-1.3-1.7-1.7-2.8c-0.3-1.1-0.5-2.4-0.5-3.9c0-2.1,0.2-3.8,0.6-5.1c0.4-1.4,1.1-2.5,2-3.3s2.1-1.4,3.6-1.8c1.5-0.3,3.3-0.5,5.4-0.5c4.2,0,8.1,0.4,11.5,1.2l-1.2,7.7c-3-0.5-5.4-0.7-7.2-0.7c-1.8,0-3.3,0.1-4.6,0.2v2.4l3.4,0.3c2.1,0.2,3.9,0.6,5.3,1.1s2.6,1.1,3.4,1.9c0.9,0.8,1.5,1.7,1.8,2.8c0.4,1.1,0.5,2.3,0.5,3.8c0,2-0.3,3.7-0.8,5.1c-0.5,1.4-1.2,2.4-1.9,3.2c-0.6,0.6-1.4,1-2.3,1.4c-0.9,0.3-1.9,0.6-2.9,0.7c-1,0.2-2,0.3-3.1,0.3c-1,0-2,0.1-2.8,0.1c-2.1,0-4.1-0.1-6-0.3C104.5,33,102.7,32.7,100.9,32.3z"/>
                            <path d="M129,2.8h9.6v22.5h3.4c1.2,0,2.1-0.2,2.5-0.5s0.7-1,0.7-2.1v-20h9.6v16.8c0,2.6-0.2,4.7-0.5,6.5s-1,3.2-1.9,4.3s-2.3,1.9-3.9,2.4s-3.9,0.7-6.5,0.7c-2.7,0-4.8-0.2-6.5-0.7s-3-1.3-3.9-2.4c-0.9-1.1-1.6-2.5-1.9-4.3c-0.3-1.8-0.5-3.9-0.5-6.5V2.8H129z"/>
                            <path d="M179.8,22.8l5.2,10h-10.6l-3.9-8.9h-2.1v8.9h-9.6v-30H174c6.9,0,10.3,3.5,10.3,10.5C184.3,18.1,182.8,21.3,179.8,22.8zM170.7,10.5h-2.2v6h2.2c1.2,0,2-0.1,2.5-0.4c0.5-0.2,0.8-0.8,0.8-1.6v-2c0-0.9-0.3-1.4-0.8-1.6C172.7,10.6,171.9,10.5,170.7,10.5z"/>
                            <path d="M188.4,32.8v-30h9.6v30H188.4z"/>
                        </svg>
                    </div>
                    <nav className="Footer_Navigate">
                        <ul>
                            <li><Link to=''>소개</Link></li>
                            <li><Link to=''>행사</Link></li>
                            <li><Link to=''>공연·전시</Link></li>
                            <li><Link to=''>참여 갤러리</Link></li>
                            <li><Link to=''>게시판</Link></li>
                        </ul>
                    </nav>
                    <div className="Footer_SNSWrap">
                        <div className="Facebook_Icon">
                            <Link to=''></Link>
                        </div>
                        <div className="Youtube_Icon">
                            <Link to=''></Link> 
                        </div>
                        <div className="Instagram_Icon">
                            <Link to=''></Link> 
                        </div>
                        <div className="Kakaotalk_Icon">
                            <Link to=''></Link> 
                        </div>
                    </div>
                </article>
                <article className="Footer_SecondWrap">
                    <div className="Footer_InfoWrap">
                        <ul className="Footer_Notice">
                            <li><Link to=''>회사소개</Link></li>
                            <li className="BoldNotice"><Link to=''>개인정보 처리방침</Link></li>
                            <li><Link to=''>이용약관</Link></li>
                            <li><Link to=''>저작권정책</Link></li>
                            <li><Link to=''>영상정보처리기기 운영 · 관리방침</Link></li>
                            <li><Link to=''>이메일 무단수집 금지</Link></li>
                        </ul>
                        <ul className="Footer_Info">
                            <li>연락처 : 02-123-4567</li>
                            <li>팩스 : 587-412-8954</li>
                            <li>이메일 : alsdud@help.com</li>
                            <li>사업자 등록번호 : 999-78-558899</li>
                            <li>상호 : 페스츠리</li>
                            <li>대표이사 : 박민영</li>
                        </ul> 
                    </div>
                    <div className="Footer_CSWrap">
                        <div className="CSText">고객센터</div>
                        <div className="CSNumber">02-999-4587</div>
                        <div className="CSAlert1">평일 09:00 ~ 18:00</div>
                        <div className="CSAlert2">휴무 / 일 / 공휴일은 휴무</div>
                        <div className="CSAlert3">점심 12:00 ~ 13:00</div>
                    </div>
                </article>
                <article className="Footer_CopyrightSection">
                    Copyright ⓒ 2023 FESTSURI All rights reserved.
                </article>
            </section>
        </footer>
     );
}
 
export default Footer;