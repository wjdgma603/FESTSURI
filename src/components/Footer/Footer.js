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
                            <Link to=''>
                                    
                            </Link> 
                        </div>
                        <div className="Kakaotalk_Icon">
                            <Link to=''>
                                <svg version="1.1" id="Layer_1" viewBox="0 0 512 512">
                                    <g>
                                        <path class="st0" d="M512.8,513c-170.5,0-341.2,0-511.8,0C1,342.4,1,171.8,1,1.1c170.5,0,341.1,0,511.8,0C512.8,171.7,512.8,342.3,512.8,513z M154,369.9c-5.7,21.4-11.4,42.8-17.3,64.2c-0.9,3.4-1.8,6.5,1.6,8.9c3.3,2.4,5.9,0.2,8.6-1.6c22.3-15.2,44.6-30.5,67.1-45.6c3.2-2.2,6.9-4.9,10.4-4.9c10.9,0,21.9,1.7,32.8,1.7c13.5-0.1,27-0.2,40.3-3.2c16.4-3.6,32.5-7.9,48.2-14.1c30.4-11.9,55-31,75.4-56c17.3-21.2,25.8-46.1,27.4-73.2c0.4-6.3-0.5-12.9-1.6-19.2c-1.8-10.2-3.2-20.6-6.9-30.2c-13.5-35.3-39.2-59.8-71.2-78.7c-20.2-11.9-42.3-18.5-64.8-23.6c-25.1-5.8-50.7-6.3-76.1-2.8c-13.8,1.9-27.6,4.6-40.9,8.7c-41.8,12.9-77.1,35.4-101.3,72.8c-17.9,27.8-25.2,58.2-18.6,90.9c5.1,25.7,16.8,48.5,36.1,66.8c8.4,8,16.8,16,26,23.1C136.8,359.9,145.4,364.5,154,369.9z"/>
                                        <path class="st1" d="M154,369.9c-8.6-5.4-17.2-10-24.8-15.9c-9.1-7.1-17.6-15.1-26-23.1c-19.2-18.3-30.9-41.1-36.1-66.8 c-6.5-32.6,0.7-63.1,18.6-90.9c24.2-37.4,59.5-59.9,101.3-72.8c13.3-4.1,27.1-6.8,40.9-8.7c25.5-3.5,51-2.9,76.1,2.8 c22.5,5.2,44.6,11.7,64.8,23.6c32,18.9,57.7,43.4,71.2,78.7c3.7,9.6,5,20,6.9,30.2c1.1,6.3,2,12.8,1.6,19.2 c-1.6,27.1-10.2,52-27.4,73.2c-20.3,24.9-45,44.1-75.4,56c-15.8,6.2-31.8,10.5-48.2,14.1c-13.4,2.9-26.9,3.1-40.3,3.2 c-10.9,0-21.9-1.7-32.8-1.7c-3.5,0-7.3,2.8-10.4,4.9c-22.4,15.1-44.7,30.3-67.1,45.6c-2.6,1.8-5.2,4-8.6,1.6 c-3.3-2.4-2.5-5.5-1.6-8.9C142.6,412.7,148.3,391.3,154,369.9z M345.7,235.9c0-10.6,0.1-19.8,0-28.9c-0.1-6-3.7-9.7-9.1-9.7 c-5.3,0-9.2,3.8-9.2,9.7c-0.1,24.8-0.1,49.7,0,74.5c0,6.1,3.6,9.6,9.2,9.5c5.5,0,9-3.7,9.1-9.7c0.1-5.7,0.5-11.4-0.1-17 c-0.7-6.2,2.1-10,6.9-13.2c3.2,4.3,6.4,8.6,9.6,12.9c5.4,7.5,10.7,15,16.1,22.4c3.3,4.6,9.6,5.9,14.1,3c4.2-2.7,4.7-7.5,1.3-12.7 c-1.1-1.7-2.3-3.2-3.6-4.8c-8.1-10.7-16.3-21.4-24.5-32.2c3.2-3.5,5.8-6.4,8.6-9.3c5.9-6.2,11.8-12.2,17.6-18.4 c2.4-2.5,3.6-5.9,1.2-8.6c-2-2.2-5.4-4.4-8.1-4.4c-2.8,0-6.3,2.1-8.4,4.3C366.3,213.7,356.6,224.3,345.7,235.9z M257.3,282.7 c-0.2-0.9-0.3-2.2-0.7-3.5c-8.8-24.1-17.6-48.2-26.5-72.2c-2.1-5.8-6.4-9.5-12.7-9.7c-6.6-0.2-11.2,3.6-13.4,9.4 c-9.3,24.1-18.4,48.2-27.5,72.4c-1.9,5.1,0.5,9.7,5.2,11.3c5,1.8,9.7-0.4,11.7-5.5c1.2-3.1,2.3-6.3,3.1-9.5 c0.7-2.8,2.1-3.6,4.9-3.6c10.3,0.2,20.7,0.2,31,0c2.9-0.1,4.1,1,4.8,3.7c0.9,3.5,2,7.1,3.5,10.4c1.8,4.1,6.2,5.9,10.5,4.7 C254.9,289.7,257.1,287.2,257.3,282.7z M160.2,214.9c6.6,0,12.6,0,18.6,0c4,0,7.2-1.6,8.8-5.2c2.7-6.3-2.9-11.7-9.3-11.6 c-18,0.2-36,0-54,0.1c-6.2,0-10,3.4-9.9,8.7c0.1,5.1,3.6,8,9.9,8c5.8,0,11.5,0,17.6,0c0,2.5,0,4.3,0,6.1c0,20.2-0.1,40.3,0,60.5 c0,6.1,3.5,9.6,9.1,9.6c5.6,0,9-3.5,9.1-9.6c0.1-4.5,0-9,0-13.5C160.2,250.5,160.2,233,160.2,214.9z M285.2,273.3 c0-2.1,0-3.8,0-5.4c0-20,0-40,0-60c0-4.9-1.6-8.8-6.2-10.7c-6.1-2.5-12,2.3-12.1,9.8c-0.2,14-0.1,28-0.1,42c0,10.3-0.1,20.7,0,31 c0.1,6.2,3.2,9.8,8.9,9.9c11.8,0.2,23.7,0.2,35.5,0c6.2-0.1,10-6.5,7.4-11.8c-1.8-3.8-5.2-4.9-9.1-4.8C301.6,273.3,293.6,273.3,285.2,273.3z"/>
                                        <path class="st0" d="M345.7,235.9c10.9-11.6,20.6-22.2,30.7-32.5c2.1-2.2,5.6-4.3,8.4-4.3c2.8,0,6.1,2.2,8.1,4.4 c2.4,2.6,1.1,6-1.2,8.6c-5.8,6.2-11.8,12.2-17.6,18.4c-2.7,2.9-5.4,5.8-8.6,9.3c8.2,10.8,16.4,21.5,24.5,32.2 c1.2,1.6,2.5,3.2,3.6,4.8c3.4,5.2,2.9,10-1.3,12.7c-4.5,2.9-10.8,1.6-14.1-3c-5.4-7.5-10.7-15-16.1-22.4c-3.1-4.3-6.3-8.6-9.6-12.9 c-4.8,3.2-7.7,6.9-6.9,13.2c0.6,5.6,0.2,11.3,0.1,17c-0.1,6-3.6,9.6-9.1,9.7c-5.6,0-9.1-3.4-9.2-9.5c-0.1-24.8-0.1-49.7,0-74.5 c0-5.9,3.9-9.7,9.2-9.7c5.4,0,9,3.7,9.1,9.7C345.8,216.2,345.7,225.3,345.7,235.9z"/>
                                        <path class="st0" d="M257.3,282.7c-0.2,4.5-2.4,6.9-6.2,8c-4.3,1.2-8.7-0.6-10.5-4.7c-1.5-3.3-2.6-6.9-3.5-10.4 c-0.7-2.7-1.9-3.7-4.8-3.7c-10.3,0.2-20.7,0.2-31,0c-2.8,0-4.2,0.8-4.9,3.6c-0.8,3.2-1.9,6.4-3.1,9.5c-2,5.1-6.7,7.3-11.7,5.5 c-4.7-1.7-7.1-6.3-5.2-11.3c9-24.2,18.2-48.3,27.5-72.4c2.3-5.8,6.8-9.6,13.4-9.4c6.3,0.2,10.6,3.9,12.7,9.7 c8.9,24,17.7,48.1,26.5,72.2C257,280.5,257.1,281.9,257.3,282.7z M230.9,255.8c-4.7-13.9-9.2-27-13.7-40.2c-0.4,0-0.7,0.1-1.1,0.1 c-4.4,13.3-8.7,26.6-13.2,40.2C212.3,255.8,221.1,255.8,230.9,255.8z"/>
                                        <path class="st0" d="M160.2,214.9c0,18.2,0,35.6,0,53.1c0,4.5,0.1,9,0,13.5c-0.2,6.1-3.6,9.6-9.1,9.6c-5.6,0-9.1-3.5-9.1-9.6 c-0.1-20.2,0-40.3,0-60.5c0-1.8,0-3.6,0-6.1c-6.1,0-11.8,0-17.6,0c-6.3,0-9.8-2.9-9.9-8c-0.1-5.3,3.7-8.7,9.9-8.7 c18,0,36,0.1,54-0.1c6.4-0.1,12,5.3,9.3,11.6c-1.5,3.6-4.7,5.2-8.8,5.2C172.8,214.8,166.8,214.9,160.2,214.9z"/>
                                        <path class="st0" d="M285.2,273.3c8.4,0,16.4,0,24.3,0c4,0,7.3,1.1,9.1,4.8c2.6,5.3-1.1,11.7-7.4,11.8c-11.8,0.3-23.7,0.2-35.5,0 c-5.6-0.1-8.8-3.7-8.9-9.9c-0.1-10.3,0-20.7,0-31c0-14-0.1-28,0.1-42c0.1-7.5,6-12.3,12.1-9.8c4.6,1.9,6.2,5.8,6.2,10.7 c-0.1,20,0,40,0,60C285.2,269.5,285.2,271.2,285.2,273.3z"/>
                                        <path class="st1" d="M230.9,255.8c-9.8,0-18.5,0-28,0c4.5-13.6,8.8-26.9,13.2-40.2c0.4,0,0.7-0.1,1.1-0.1 C221.6,228.7,226.1,241.9,230.9,255.8z"/>
                                    </g>
                                </svg>
                            </Link> 
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