import { Link } from 'react-router-dom'
import './Header.css'
import { useEffect } from 'react'



function Header({Loaded}) {
    useEffect(()=>{
      let SVGs = document.querySelectorAll('.Header_logoPath')
      let HeaderBG = document.querySelector('.Header')
      let NavigationFont = document.querySelectorAll('.Header_NavUl a')
      let PersonalMenu = document.querySelectorAll('.Header_Personal a')
      let DarkModeBox = document.querySelector('.darkmodebox')
      if(Loaded){
        SVGs.forEach(Svg => {Svg.style.fill = "#ddd"})
        NavigationFont.forEach(NavFont =>{NavFont.style.color = "#fff"})
        PersonalMenu.forEach(PerMenuFont =>{PerMenuFont.style.color = "#fff"})
        HeaderBG.style.backgroundColor = "rgba(0,0,0,.5)"
        DarkModeBox.style.backgroundColor = "#fff"
        window.addEventListener('scroll', function(){
          if(window.innerHeight - HeaderBG.clientHeight <= window.scrollY ){ //메인 1섹션 이후
          SVGs.forEach(Svg => {Svg.style.fill = "url(#SVGID_1_)"})
          NavigationFont.forEach(NavFont =>{NavFont.style.color = "#222"})
          PersonalMenu.forEach(PerMenuFont =>{PerMenuFont.style.color = "#222"})
          HeaderBG.style.backgroundColor = "#fff"
          DarkModeBox.style.backgroundColor = "#333"
          }else if(window.innerHeight - HeaderBG.clientHeight >= window.scrollY){ // 메인 1섹션 이전
          SVGs.forEach(Svg => {Svg.style.fill = "#ddd"})
          NavigationFont.forEach(NavFont =>{NavFont.style.color = "#fff"})
          PersonalMenu.forEach(PerMenuFont =>{PerMenuFont.style.color = "#fff"})
          HeaderBG.style.backgroundColor = "rgba(0,0,0,.5)"
          DarkModeBox.style.backgroundColor = "#fff"
          }}) //window 이벤트 함수 종료
      }else{
        SVGs.forEach(Svg => {Svg.style.fill = "url(#SVGID_1_)"})
        NavigationFont.forEach(NavFont =>{NavFont.style.color = "#222"})
        PersonalMenu.forEach(PerMenuFont =>{PerMenuFont.style.color = "#222"})
        HeaderBG.style.backgroundColor = "#fff"
        DarkModeBox.style.backgroundColor = "#333"
        window.addEventListener('scroll', function(){
          SVGs.forEach(Svg => {Svg.style.fill = "url(#SVGID_1_)"})
          NavigationFont.forEach(NavFont =>{NavFont.style.color = "#222"})
          PersonalMenu.forEach(PerMenuFont =>{PerMenuFont.style.color = "#222"})
          HeaderBG.style.backgroundColor = "#fff"
          DarkModeBox.style.backgroundColor = "#333"
          })
      }
    },[Loaded])
  return (
    <header className="Header">
        <div className="headerWrap">
          <div className='Header_logo'>
            <Link to='/'>
              <svg version="1.1" id="Layer_1" x="0px" y="0px"
                viewBox="0 0 200 35.7" enableBackground="new 0 0 200 35.7">
                <g>
                  <linearGradient id="SVGID_1_"gradientUnits="userSpaceOnUse"x1="0.3345"y1="20.2"x2="199.7684"y2="20.2"gradientTransform="matrix(1 0 0 -1 0 38)">
                    <stop  offset="0" stopColor="#297AAD"/>
                    <stop  offset="1" stopColor="#2A3D4E"/>
                  </linearGradient>
                  <path className='Header_logoPath' fill="url(#SVGID_1_)" d="M20.2,21.7H12v11.1H2.4v-30h19.7l-1.2,7.7H12v4h8.2V21.7z"/>
                  <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="0.3345" y1="20.2" x2="199.7684" y2="20.2" gradientTransform="matrix(1 0 0 -1 0 38)">
                    <stop  offset="0" stopColor="#297AAD"/>
                    <stop  offset="1" stopColor="#2A3D4E"/>
                  </linearGradient>
                  <path className='Header_logoPath' fill="url(#SVGID_2_)" d="M44.2,21.5h-9.6v3.6h11.8v7.7H25v-30h21.1l-1.2,7.7H34.6v4h9.6C44.2,14.5,44.2,21.5,44.2,21.5z"/>
                  <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="0.3345" y1="20.15" x2="199.7684" y2="20.15" gradientTransform="matrix(1 0 0 -1 0 38)">
                    <stop  offset="0" stopColor="#297AAD"/>
                    <stop  offset="1" stopColor="#2A3D4E"/>
                  </linearGradient>
                  <path className='Header_logoPath' fill="url(#SVGID_3_)" d="M49.2,32.3l1.4-7.9c2.9,0.7,5.6,1.1,8,1.1c1.2,0,2.3,0,3.2-0.1c0.9,0,1.7-0.1,2.5-0.2v-2.4L60,22.4
                    c-1.9-0.2-3.6-0.5-4.9-1c-1.3-0.5-2.4-1.1-3.1-1.9c-0.8-0.8-1.3-1.7-1.7-2.8c-0.3-1.1-0.5-2.4-0.5-3.9c0-2.1,0.2-3.8,0.6-5.1
                    c0.4-1.4,1.1-2.5,2-3.3S54.5,3,56,2.6c1.5-0.3,3.3-0.5,5.4-0.5c4.2,0,8.1,0.4,11.5,1.2L71.7,11c-3-0.5-5.4-0.7-7.2-0.7
                    c-1.8,0-3.3,0.1-4.6,0.2v2.4l3.4,0.3c2.1,0.2,3.9,0.6,5.3,1.1s2.6,1.1,3.4,1.9c0.9,0.8,1.5,1.7,1.8,2.8c0.4,1.1,0.5,2.3,0.5,3.8
                    c0,2-0.3,3.7-0.8,5.1s-1.2,2.4-1.9,3.2c-0.6,0.6-1.4,1-2.3,1.4c-0.9,0.3-1.9,0.6-2.9,0.7c-1,0.2-2,0.3-3.1,0.3c-1,0-2,0.1-2.8,0.1
                    c-2.1,0-4.1-0.1-6-0.3C52.8,33,51,32.7,49.2,32.3z"/>
                  <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="0.3345" y1="20.2" x2="199.7684" y2="20.2" gradientTransform="matrix(1 0 0 -1 0 38)">
                    <stop  offset="0" stopColor="#297AAD"/>
                    <stop  offset="1" stopColor="#2A3D4E"/>
                  </linearGradient>
                  <path className='Header_logoPath' fill="url(#SVGID_4_)" d="M99.4,10.5h-7v22.3h-9.6V10.5h-7V2.8h23.5L99.4,10.5L99.4,10.5z"/>
                  <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="0.3345" y1="20.15" x2="199.7684" y2="20.15" gradientTransform="matrix(1 0 0 -1 0 38)">
                    <stop  offset="0" stopColor="#297AAD"/>
                    <stop  offset="1" stopColor="#2A3D4E"/>
                  </linearGradient>
                  <path className='Header_logoPath' fill="url(#SVGID_5_)" d="M100.9,32.3l1.4-7.9c2.9,0.7,5.6,1.1,8,1.1c1.2,0,2.3,0,3.2-0.1s1.7-0.1,2.5-0.2v-2.4l-4.3-0.4
                    c-1.9-0.2-3.6-0.5-4.9-1s-2.4-1.1-3.1-1.9c-0.8-0.8-1.3-1.7-1.7-2.8c-0.3-1.1-0.5-2.4-0.5-3.9c0-2.1,0.2-3.8,0.6-5.1
                    c0.4-1.4,1.1-2.5,2-3.3s2.1-1.4,3.6-1.8c1.5-0.3,3.3-0.5,5.4-0.5c4.2,0,8.1,0.4,11.5,1.2l-1.2,7.7c-3-0.5-5.4-0.7-7.2-0.7
                    c-1.8,0-3.3,0.1-4.6,0.2v2.4l3.4,0.3c2.1,0.2,3.9,0.6,5.3,1.1s2.6,1.1,3.4,1.9c0.9,0.8,1.5,1.7,1.8,2.8c0.4,1.1,0.5,2.3,0.5,3.8
                    c0,2-0.3,3.7-0.8,5.1s-1.2,2.4-1.9,3.2c-0.6,0.6-1.4,1-2.3,1.4c-0.9,0.3-1.9,0.6-2.9,0.7c-1,0.2-2,0.3-3.1,0.3c-1,0-2,0.1-2.8,0.1
                    c-2.1,0-4.1-0.1-6-0.3C104.5,33,102.7,32.7,100.9,32.3z"/>
                  <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="0.3345" y1="19.95" x2="199.7684" y2="19.95" gradientTransform="matrix(1 0 0 -1 0 38)">
                    <stop  offset="0" stopColor="#297AAD"/>
                    <stop  offset="1" stopColor="#2A3D4E"/>
                  </linearGradient>
                  <path className='Header_logoPath' fill="url(#SVGID_6_)" d="M129,2.8h9.6v22.5h3.4c1.2,0,2.1-0.2,2.5-0.5s0.7-1,0.7-2.1v-20h9.6v16.8c0,2.6-0.2,4.7-0.5,6.5
                    c-0.3,1.8-1,3.2-1.9,4.3s-2.3,1.9-3.9,2.4c-1.7,0.5-3.9,0.7-6.5,0.7c-2.7,0-4.8-0.2-6.5-0.7s-3-1.3-3.9-2.4s-1.6-2.5-1.9-4.3
                    c-0.3-1.8-0.5-3.9-0.5-6.5V2.8H129z"/>
                  <linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="0.3345" y1="20.2" x2="199.7684" y2="20.2" gradientTransform="matrix(1 0 0 -1 0 38)">
                    <stop  offset="0" stopColor="#297AAD"/>
                    <stop  offset="1" stopColor="#2A3D4E"/>
                  </linearGradient>
                  <path className='Header_logoPath' fill="url(#SVGID_7_)" d="M179.8,22.8l5.2,10h-10.6l-3.9-8.9h-2.1v8.9h-9.6v-30H174c6.9,0,10.3,3.5,10.3,10.5
                    C184.3,18.1,182.8,21.3,179.8,22.8z M170.7,10.5h-2.2v6h2.2c1.2,0,2-0.1,2.5-0.4c0.5-0.2,0.8-0.8,0.8-1.6v-2c0-0.9-0.3-1.4-0.8-1.6
                    C172.7,10.6,171.9,10.5,170.7,10.5z"/>
                  <linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="0.3345" y1="20.2" x2="199.7684" y2="20.2" gradientTransform="matrix(1 0 0 -1 0 38)">
                    <stop  offset="0" stopColor="#297AAD"/>
                    <stop  offset="1" stopColor="#2A3D4E"/>
                  </linearGradient>
                  <path className='Header_logoPath' fill="url(#SVGID_8_)" d="M188.4,32.8v-30h9.6v30H188.4z"/>
                </g>
              </svg>
            </Link>
          </div>
          <div className='Header_Navigate'>
            <nav className='Header_Nav'>
              <ul className='Header_NavUl'>
                <li><Link to='/introduce'>소개</Link></li>
                <li><Link to='/party'>행사</Link></li>
                <li><Link to='/exhibition'>공연·전시</Link></li>
                <li><Link to='/gallery'>참여 갤러리</Link></li>
                <li><Link to='/board'>게시판</Link></li>
              </ul>
            </nav>
          </div>
          <div className='Header_Personal'>
            <Link to='/login'>로그인</Link>
            <Link to=''>회원가입</Link>
            <Link to=''>ENGLISH</Link>
            <div className='darkmodebox'></div>
          </div>
        </div>
    </header>
  );
}

export default Header;
