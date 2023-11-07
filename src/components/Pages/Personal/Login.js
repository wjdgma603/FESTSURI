import { Link } from "react-router-dom";
import './Login.css'


const Login = ({IsFooterLoaded}) => {
    IsFooterLoaded()
    return ( 
        <section className="Login">
            <article className="Login_LogoSection">
                <svg version="1.1" id="Layer_1" x="0px" y="0px"viewBox="0 0 200 35.7" enableBackground="new 0 0 200 35.7">
                    <g>
                    <linearGradient id="Login_LogoGradient" gradientUnits="userSpaceOnUse"x1="0.3345"y1="20.2"x2="199.7684"y2="20.2"gradientTransform="matrix(1 0 0 -1 0 38)">
                        <stop offset="0" stopColor="#43CEA2"/>
                        <stop offset="1" stopColor="#185A9D"/>
                    </linearGradient>
                    <path className='Login_logoPath' d="M20.2,21.7H12v11.1H2.4v-30h19.7l-1.2,7.7H12v4h8.2V21.7z"/>
                    <path className='Login_logoPath' d="M44.2,21.5h-9.6v3.6h11.8v7.7H25v-30h21.1l-1.2,7.7H34.6v4h9.6C44.2,14.5,44.2,21.5,44.2,21.5z"/>
                    <path className='Login_logoPath' d="M49.2,32.3l1.4-7.9c2.9,0.7,5.6,1.1,8,1.1c1.2,0,2.3,0,3.2-0.1c0.9,0,1.7-0.1,2.5-0.2v-2.4L60,22.4 c-1.9-0.2-3.6-0.5-4.9-1c-1.3-0.5-2.4-1.1-3.1-1.9c-0.8-0.8-1.3-1.7-1.7-2.8c-0.3-1.1-0.5-2.4-0.5-3.9c0-2.1,0.2-3.8,0.6-5.1 c0.4-1.4,1.1-2.5,2-3.3S54.5,3,56,2.6c1.5-0.3,3.3-0.5,5.4-0.5c4.2,0,8.1,0.4,11.5,1.2L71.7,11c-3-0.5-5.4-0.7-7.2-0.7 c-1.8,0-3.3,0.1-4.6,0.2v2.4l3.4,0.3c2.1,0.2,3.9,0.6,5.3,1.1s2.6,1.1,3.4,1.9c0.9,0.8,1.5,1.7,1.8,2.8c0.4,1.1,0.5,2.3,0.5,3.8 c0,2-0.3,3.7-0.8,5.1s-1.2,2.4-1.9,3.2c-0.6,0.6-1.4,1-2.3,1.4c-0.9,0.3-1.9,0.6-2.9,0.7c-1,0.2-2,0.3-3.1,0.3c-1,0-2,0.1-2.8,0.1 c-2.1,0-4.1-0.1-6-0.3C52.8,33,51,32.7,49.2,32.3z"/>
                    <path className='Login_logoPath' d="M99.4,10.5h-7v22.3h-9.6V10.5h-7V2.8h23.5L99.4,10.5L99.4,10.5z"/>
                    <path className='Login_logoPath' d="M100.9,32.3l1.4-7.9c2.9,0.7,5.6,1.1,8,1.1c1.2,0,2.3,0,3.2-0.1s1.7-0.1,2.5-0.2v-2.4l-4.3-0.4 c-1.9-0.2-3.6-0.5-4.9-1s-2.4-1.1-3.1-1.9c-0.8-0.8-1.3-1.7-1.7-2.8c-0.3-1.1-0.5-2.4-0.5-3.9c0-2.1,0.2-3.8,0.6-5.1 c0.4-1.4,1.1-2.5,2-3.3s2.1-1.4,3.6-1.8c1.5-0.3,3.3-0.5,5.4-0.5c4.2,0,8.1,0.4,11.5,1.2l-1.2,7.7c-3-0.5-5.4-0.7-7.2-0.7 c-1.8,0-3.3,0.1-4.6,0.2v2.4l3.4,0.3c2.1,0.2,3.9,0.6,5.3,1.1s2.6,1.1,3.4,1.9c0.9,0.8,1.5,1.7,1.8,2.8c0.4,1.1,0.5,2.3,0.5,3.8 c0,2-0.3,3.7-0.8,5.1s-1.2,2.4-1.9,3.2c-0.6,0.6-1.4,1-2.3,1.4c-0.9,0.3-1.9,0.6-2.9,0.7c-1,0.2-2,0.3-3.1,0.3c-1,0-2,0.1-2.8,0.1 c-2.1,0-4.1-0.1-6-0.3C104.5,33,102.7,32.7,100.9,32.3z"/>
                    <path className='Login_logoPath' d="M129,2.8h9.6v22.5h3.4c1.2,0,2.1-0.2,2.5-0.5s0.7-1,0.7-2.1v-20h9.6v16.8c0,2.6-0.2,4.7-0.5,6.5 c-0.3,1.8-1,3.2-1.9,4.3s-2.3,1.9-3.9,2.4c-1.7,0.5-3.9,0.7-6.5,0.7c-2.7,0-4.8-0.2-6.5-0.7s-3-1.3-3.9-2.4s-1.6-2.5-1.9-4.3 c-0.3-1.8-0.5-3.9-0.5-6.5V2.8H129z"/>
                    <path className='Login_logoPath' d="M179.8,22.8l5.2,10h-10.6l-3.9-8.9h-2.1v8.9h-9.6v-30H174c6.9,0,10.3,3.5,10.3,10.5 C184.3,18.1,182.8,21.3,179.8,22.8z M170.7,10.5h-2.2v6h2.2c1.2,0,2-0.1,2.5-0.4c0.5-0.2,0.8-0.8,0.8-1.6v-2c0-0.9-0.3-1.4-0.8-1.6 C172.7,10.6,171.9,10.5,170.7,10.5z"/>
                    <path className='Login_logoPath' d="M188.4,32.8v-30h9.6v30H188.4z"/>
                    </g>
                </svg>
            </article>
            <article className="Login_InputSection">
                <form name="LoginData" acceptCharset="utf-8" method="post">
                    <div className="ID_Text">아이디</div>
                    <input type="text" placeholder="아이디를 입력하세요"></input>
                    <div className="Password_Text">비밀번호</div>
                    <input type="current-password" placeholder="비밀번호를 입력하세요"></input>
                    <div className="Login_FindAndSave">
                        <div className="SaveMyId">
                            <label className="SaveMyIdLabel" htmlFor="SaveIdInput">
                                <input id="SaveIdInput" type="checkbox"></input>
                                <div className="SVG_AnimateWrap">
                                    <svg viewBox="0 0 20 20">
                                        <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                                        <polyline points="4 11 8 15 16 6"></polyline>
                                    </svg>
                                </div>
                            </label>
                            <div>아이디 저장</div>
                        </div>
                        <div className="FindMyAccount">
                            <Link to="">아이디 찾기</Link>
                            <Link to="">비밀번호 찾기</Link>
                        </div>
                    </div>
                    <div className="JoinUs">
                        <div className="JoinUs_Text">페스츠리 회원이 되어보세요</div>
                        <div className="JoinUs_Button">
                            <Link to=''>회원가입</Link>
                        </div>
                    </div>
                    <input className="SubmitBtn" type="submit" value={'로그인'}></input>
                </form>
            </article>
            
        </section>
     );
}
 
export default Login;