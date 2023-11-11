import './Main.css'
import * as THREE from 'three'
import { useState, useEffect, useRef, React } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import model from './model/scene.gltf'
import { Link } from 'react-router-dom';
import SlideEvent from './sliderObj.json'
import mainTitleItem from './SubComponents/mainTitleItem.json'
import MainTitleWrap from './SubComponents/mainTitleWrap';
import MainEventSection from './SubComponents/MainEventSection';
// 메인 작성
import ItrFESTSURI from '../Introduce/SubComponents/ItrFESTSURI';
// 소개페이지 컴포넌트
import PartyPoster from '../Party/Comp/Party_poster';
import PartyJson from '../Party/Comp/Party_poster.json';
// 행사페이지 컴포넌트
import ExhibitionPoster from '../Exhibition/Comp/Poster';
import ExhibitionJson from '../Exhibition/Comp/Poster1.json';
// 공연전시 페이지 컴포넌트
const Main = ({IsHeaderLoaded}) => {
    IsHeaderLoaded();
    useEffect(() => {
        //GLTF Loader
        const gltfLoader = new GLTFLoader();
        gltfLoader.load(model, (gltf)=>{    
            const imgs = gltf.scene.children[0];
            imgs.position.z = -1.5
            imgs.position.x = 1.5;
            imgs.position.y = -1.1;
            scene.add(imgs)
            camera.lookAt(imgs)
            function animated() {
                requestAnimationFrame(animated)
                imgs.rotation.y = Math.sin(Date.now() * 0.001) * .15;
                renderer.render(scene,camera)
            }
            animated()
        })
        //Renderer Setting
        var canvReference = document.getElementById("my_canvas");
        const renderer = new THREE.WebGLRenderer({antialias : true, alpha : true, canvas: canvReference});
        renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1) 
        renderer.setSize(canvReference.clientWidth, canvReference.clientHeight); 
        //scene
        const scene = new THREE.Scene();
        //camera
        const camera = new THREE.PerspectiveCamera(47,canvReference.clientWidth/canvReference.clientHeight,0.1,1000);
        scene.add(camera)   
        camera.position.z = 5;
        camera.position.y = 0;
        camera.position.x = 4;
        // light 
        const ambientLight = new THREE.AmbientLight('white', 4);
        scene.add(ambientLight);
        // 컨트롤 셋팅
        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enabled = false
        const animate = ()=>{
            controls.update()
            renderer.render(scene, camera)
            renderer.setAnimationLoop(animate)
        }
        animate();
        renderer.render(scene, camera)
        // 창 크기에 따라 사이즈 조절
        window.addEventListener('resize', ()=>{
            camera.aspect = canvReference.innerWidth / canvReference.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvReference.innerWidth, canvReference.innerHeight);
            renderer.render(scene, camera);
        })
    }, [])
    // useEffect 사용한 three.js 부분

    const SlideWidth = 1280; // 슬라이드 넓이값
    const SlideRef = useRef(); // 슬라이드 랩을 찾는 Ref
    const MaxSlides = SlideEvent.length; // json 객체 내용의 갯수
    const TotalSlides = MaxSlides * 3; // 복사를 포함한 전체 슬라이드 숫자
    let threeTimesEvents = []; // 슬라이드 앞 뒤로 복사하는 내용을 저장하는 배열
    const NextEnd = TotalSlides - 2; 
    const PrevStart = 2;
    const START = (TotalSlides * 1/3) - 1;
    const NextStart = (TotalSlides * 2/3) + 2; 
    const PrevEnd = (TotalSlides * 1/3) - 2;
    const [slideState, setSlideState] = useState({number: START,}) 
    const events = SlideEvent;
    threeTimesEvents = [...events, ...events, ...events];

    function moveTo(setNumber, setMotion){
        setSlideState({
            number: setNumber,
            hasMotion: setMotion
        })
    }
    // 슬라이드 움직이는 함수(슬라이드 번호, 전환효과)

    function slideAfterMove(setNumber, setMotion) {
        setTimeout(()=>{
            moveTo(setNumber, setMotion)
        }, 10)
    }
    
    // 슬라이드 움직이는 함수 지연시간
    function handleSlideRight() {
        if(slideState.number === NextEnd) {
            moveTo(PrevEnd, false);
            slideAfterMove(PrevEnd + 1, true);
        } else {
            moveTo(slideState.number + 1, true);
        }
    }
    function handleSlideLeft() {
        if(slideState.number === PrevStart) {
            moveTo(NextStart, false);
            slideAfterMove(NextStart - 1, true);
        } else {
            moveTo(slideState.number - 1, true);
        }   
    }
    // 슬라이드 버튼 함수
    useEffect(()=>{
        let SlideMargin = 60;
        let SlideHeight = SlideRef.current.clientHeight
        const MainSlideSec = document.querySelector('.Main_SlideSection')
        MainSlideSec.style.height = `${SlideHeight + SlideMargin}px`
        SlideRef.current.style.margin = `0 ${(window.innerWidth - SlideWidth) / 2}px`
    },[])
    // 슬라이드 상하 여백 계산

    useEffect(()=>{
        SlideRef.current.style.transform = `translateX(-${slideState.number * SlideWidth}px)`
        SlideRef.current.style.transition = slideState.hasMotion ? 'all 0.3s ease-in-out' : '';
    }, [slideState])
    // 슬라이드 마무리
    function slideStyle(index){
        if(index === slideState.number){return{filter : `brightness(100%)`}}
        else{return{filter : `brightness(50%)`}}
    }
    // 슬라이드 배경 필터 스타일 함수


    return ( 
        <main className="Main">
            <section className="Main_IntroSection">
                <article className='Text_Sector'>
                    <h1>아름다운 축제와<br className='Mobile_space'/>행복한 추억이 가득한<br className='Mobile_space'/><span>페스츠리</span>와 함께</h1>
                    <p>패스츠리 지금 여기에서 특별한 여정을, 다채로운 문화, 예술, 그리고 무수한 활동으로 가득 차 있습니다.</p>
                </article>
                <article className='Three_Sector'>
                    <div className='ThreeBackLight'></div>
                    <canvas id='my_canvas'></canvas>
                </article>
            </section>
            <section className="Main_SlideSection">
                <div className='MainSlide_BlackBg'></div>
                <article className='Main_Slider' ref={SlideRef}>
                    {threeTimesEvents.map((event, index)=> 
                        <div className={`Slide Slide${index}`} key={event.id = index} style={slideStyle(index)}>
                            <Link to={event.sliderLink}>
                                <img src={require("./images/pcSlide/slide0"+event.sliderNum+".jpg")} alt={`slidenum${event.sliderNum}`}/>
                            </Link>
                        </div>
                    )}
                </article>
                <article className='MainSlide_BtnWrap'>
                    <div className='MainSlide_PrevBtn MainSlide_Btn' onClick={handleSlideLeft}>
                        <svg viewBox="0 0 40 74" fill="none">
                            <path d="M38.5 2L3 37L38 72" stroke="white" strokeWidth="3"/>
                        </svg>
                    </div>
                    <div className='MainSlide_NextBtn MainSlide_Btn' onClick={handleSlideRight}>
                        <svg viewBox="0 0 40 74" fill="none">
                            <path d="M38.5 2L3 37L38 72" stroke="white" strokeWidth="3"/>
                        </svg>
                    </div>
                </article>
            </section>
            <MainTitleWrap {...mainTitleItem[0]}/>
            <section className='Main_PtySection'>
                {PartyJson.slice(0,10).map((PartyJsonData)=>
                    <PartyPoster key={PartyJsonData.id} {...PartyJsonData}/>
                )}
            </section>
            <MainTitleWrap {...mainTitleItem[1]}/>
            <section className='Main_ExbSection'>
                {ExhibitionJson.slice(0,5).map((ExhibitionJsonData)=>
                    <ExhibitionPoster key={ExhibitionJsonData.id} {...ExhibitionJsonData}/>
                )}
            </section>
            <MainTitleWrap {...mainTitleItem[2]}/>
            <MainEventSection/>
            <ItrFESTSURI/>
        </main>
     );
}

export default Main;
