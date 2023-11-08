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
    const [user, setUser] = useState();
    const [isLogin, setIsLogin] = useState(false); //useState선언
    const {Kakao} = window;
    const KakaoLogin = async()=>{
        await Kakao.Auth.login({
            success(res){
                Kakao.Auth.setAccessToken(res.access_token)
                console.log('카카오 로그인 완료')
                Kakao.API.request({
                    url : '/v2/user/me',
                    success(res){
                        console.log('카카오 데이터 인가 요청 성공')
                        setIsLogin(true);
                        const KakaoAccount = res.kakao_account;
                        localStorage.setItem('nickname', KakaoAccount.profile.nickname) // 닉네임 로컬에 저장
                        localStorage.setItem('profileimage', KakaoAccount.profile.profile_image_url) //프로필 이미지 경로 로컬에 저장
                        Navigate('/')
                    },fail(error){
                      console.log(error)
                    },
                });
            },
            fail(err){
                console.log(err)
            }
        })
    }
    const KakaoLogout = ()=>{
        Kakao.Auth.Logout((res)=>{
            localStorage.removeItem('nickname');
            localStorage.removeItem('profileimage');
            setUser(null);
            setIsLogin(false)
            console.log('로그아웃 실행')
        })
    }
    useEffect(()=>{
      const {Kakao} = window;
        const initKakao = async()=>{
          const jsKey = "12ba0647517f7c2ec68bec6dd945c6df";
          if(Kakao && !Kakao.isInitialized()){
              await Kakao.init(jsKey) // 카카오 연결 구문
              console.log('카카오 초기화'+ Kakao.isInitialized())
            }
        } 
        initKakao()
        Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false)
    },[])
    useEffect(()=>{
        if(isLogin){
            setUser({
                nickName : localStorage.getItem('nickname'),
                profileImg : localStorage.getItem('profileimage')
            })
        }
    },[isLogin])

  return (
    <div className="App">
      <Header Loaded={isHeaderLoaded} KakaoLogout={KakaoLogout} Data={user} />
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