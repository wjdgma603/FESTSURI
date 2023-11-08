import './font.css';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'

import Header from './components/Header/Header'
import Main from "./components/Pages/Main/Main.js";
import Party from './components/Pages/Party/Party';
import Exhibition from './components/Pages/Exhibition/Exhibition';
import Board from './components/Pages/Board/Board';
import Gallery from './components/Pages/Gallery/Gallery';
import Introduce from './components/Pages/Introduce/Introduce';
import PtyExbDetail from './components/Pages/PtyExbDetail/PtyExbDetail';
import Footer from './components/Footer/Footer';
import Login from './components/Pages/Personal/Login';
import { useState, useEffect } from 'react';
import Join from './components/Pages/Personal/Join';


function App() {
  const Navigate = useNavigate()
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  function IsHeaderLoaded() {
    useEffect(() => {
      setIsHeaderLoaded(true);
      return () => {
        setIsHeaderLoaded(false);
      };
    }, []);
    return isHeaderLoaded;
  }
  const [isFooterLoaded, setIsFooterLoaded] = useState(false);
  function IsFooterLoaded() {
    useEffect(() => {
      setIsFooterLoaded(true);
      return () => {
        setIsFooterLoaded(false);
      };
    }, []);
    return isFooterLoaded;
  }
  // 컴포넌트 마운트 시 True, 언마운트시 False 반환.

  // 로그인 기능 구현

  const [user, setUser] = useState({
    ProfileImage : '',
    Nickname : ''
  });
  const [isLogin, setIsLogin] = useState(false); //useState선언
  const {Kakao} = window;

  const KakaoLogin = async()=>{
      await Kakao.Auth.login({
          success(res){
              Kakao.Auth.setAccessToken(res.access_token) 
              Kakao.API.request({
                  url : '/v2/user/me',
                  success(res){
                      console.log('카카오 데이터 인가 요청 성공')
                      const KakaoAccount = res.kakao_account;
                      setUser({
                        ProfileImage: KakaoAccount.profile.profile_image_url,
                        Nickname: KakaoAccount.profile.nickname,
                      });
                      setIsLogin(true);
                      Navigate('/')
                  }
              })
          },
          fail(err){
              console.log(err)
          }
      })
  } // 카카오 로그인 함수 
  
  const KakaoLogout = ()=>{
    Kakao.Auth.logout((res)=>{
        setUser({
          ProfileImage : '',
          Nickname : ''
        });
        setIsLogin(false)
    })
  }
  //카카오 로그아웃 함수
    useEffect(()=>{
      const {Kakao} = window;
      const initKakao = async()=>{
        const jsKey = "12ba0647517f7c2ec68bec6dd945c6df";
        if(Kakao && !Kakao.isInitialized()){
            await Kakao.init(jsKey) // SDK 초기화 구문 
            console.log('카카오 초기화'+ Kakao.isInitialized())
            // 초기화가 잘되었는지 확인하는 구문, True
        }
      } //JavaScript SDK 앱 키로 초기화 하는 구문 
      initKakao();
      Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false)
    },[]) 
  // 정상적인 로그인시 Kakao.Auth.getAccessToken()로 값을 얻을 수 있음
  // 성공시 IsLogin === true, 실패시 IsLogin === false

  console.log(isLogin)
  return (
    <div className="App">
      <Header Loaded={isHeaderLoaded} KakaoLogout={KakaoLogout} isLogin={isLogin} Nickname={user.Nickname} ProfileImage={user.ProfileImage} />
        <Routes>
          <Route path='/*' element={<Main IsHeaderLoaded={IsHeaderLoaded}/>}/>
          <Route path='/login/*' element={<Login IsFooterLoaded={IsFooterLoaded} KakaoLogin={KakaoLogin}/>}/>
          <Route path='/Join/*' element={<Join IsFooterLoaded={IsFooterLoaded}/>}/>
          <Route path='/party/*' element={<Party/>}/>
          <Route path='/exhibition/*' element={<Exhibition/>}/>
          <Route path='/exbition/detail/*' element={<PtyExbDetail/>}/>
          <Route path='/board/*' element={<Board IsFooterLoaded={IsFooterLoaded}/>}/>
          <Route path='/gallery/*' element={<Gallery/>}/>
          <Route path='/introduce/*' element={<Introduce/>}/>
        </Routes>
      <Footer FtLoaded={isFooterLoaded}/>
    </div>
  );
}

export default App;