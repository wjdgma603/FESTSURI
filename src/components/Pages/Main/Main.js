import './Main.css'
import * as THREE from 'three'
import { useState, useEffect, useRef, React } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import model from './model/scene.gltf'
import { Link } from 'react-router-dom';
import SlideEvent from './sliderObj.json'
// import SliderItem from './item/sliderItem';

const Main = ({itIsLoaded}) => {
    itIsLoaded();
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

    const [eventState, setEventsState] = useState([]);
    const SlideWidth = 1280; // 슬라이드 넓이값
    const SlideMargin = 0; // 슬라이드 마진값 (사용안함)
    const MaxSlides = SlideEvent.length; // 현 슬라이드 숫자 = json 객체 숫자
    const TotalSlides = MaxSlides * 3; // 전체 슬라이드 숫자 = 앞 뒤로 존재하는 슬라이드 포함
    const SlideRef = useRef(); // 슬라이드 감싸는 요소 찾기용 Ref
    let threeTimesEvents = []; // 슬라이드 앞 뒤로 복사하는 내용을 저장하는 배열
    const NextEnd = TotalSlides - 2; // 마지막 슬라이드 마지막 부분
    const NextStart = (TotalSlides * 1/3) + 3; // 마지막 슬라이드 시작 부분 
    const START = (TotalSlides * 2/3) - 1; // 기본 슬라이드 위치
    const PrevStart = 3 // 첫번째 슬라이드 시작부분
    const PrevEnd = (TotalSlides * 2/3) - 2; //첫번째 슬라이드 마지막부분
    const [slideState, setSlideState] = useState({number: START,}) 

    async function loadEvents(){
        const events = SlideEvent;
        threeTimesEvents = [...events, ...events, ...events];
        setEventsState(threeTimesEvents);
    }
    function setInitialPosition() {
        SlideRef.current.style.transform = `translateX(-${(SlideWidth + SlideMargin) * (MaxSlides - 1)}px)`;
    }
    function moveTo(setNumber, setMotion){
        setSlideState({
            memo: slideState.number,
            number: setNumber,
            hasMotion: setMotion
        })
    }// 슬라이드 움직이는 함수(슬라이드 번호, 전환효과)

    function slideAfterMove(setNumber, setMotion) {
        setTimeout(()=>{
            moveTo(setNumber, setMotion)
        }, 1)
    }// 슬라이드 움직이는 함수 지연시간
    function handleSlideRight() {
        if(slideState.number === NextEnd && slideState.memo === NextEnd - 1) {
            moveTo(PrevEnd, false);
            slideAfterMove(PrevEnd + 1, true);
        } else if (slideState.number === NextStart && slideState.memo === NextStart - 1){
            moveTo(PrevStart, false)
            slideAfterMove(PrevStart, true);
        } else {
            moveTo(slideState.number + 1, true);
        }
    }
    function handleSlideLeft() {
        if(slideState.number === PrevEnd && slideState.memo === PrevEnd + 1) {
            moveTo(NextEnd, false);
            slideAfterMove(NextEnd - 1, true);
        } else if (slideState.number === PrevStart && slideState.memo === PrevStart - 1){
            moveTo(NextStart, false)
            slideAfterMove(NextStart, true);
        } else {
            moveTo(slideState.number - 1, true);
        }
    }
    // 슬라이드 버튼 함수
    useEffect(()=>{
        loadEvents()
        setInitialPosition();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    useEffect(()=>{
        SlideRef.current.style.transform = `translateX(-${slideState.number * (SlideWidth + SlideMargin)}px)`
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
                    {eventState.map((event, index)=> 
                        <div className={`Slide Slide${index}`} key={event.id = index} style={slideStyle(index)}>
                            <Link to={event.sliderLink}>
                                <img src={require("./images/pcSlide/slide0"+event.sliderNum+".jpg")} alt={`slidenum${event.id}`}/>
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
            <section className="Main_EventSection">

            </section>
        </main>
     );
}

export default Main;
