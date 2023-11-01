import './Main.css'
import * as THREE from 'three'
import { useState, useEffect } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import model from './model/scene.gltf'
import SliderItem from './item/sliderItem';
import SliderObj from './sliderObj.json'

const Main = () => {
    useEffect(() => {
        //GLTF Loader
        const gltfLoader = new GLTFLoader();
        gltfLoader.load(model, (gltf)=>{    
            const imgs = gltf.scene.children[0];
            console.log(imgs)
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

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = ()=>{
        setCurrentIndex((currentIndex + 1) % SliderObj.length);
    };
    const prevSlide = ()=>{
        setCurrentIndex((currentIndex - 1 + SliderObj.length) % SliderObj.length)
    }
    useEffect(()=>{
        const interval = setInterval(nextSlide, 3000); // 3초
        return () => clearInterval(interval)
    },[])

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
                <article className='Main_Slider'>
                    {SliderObj.map((sliderObj)=>
                        <SliderItem key={sliderObj.id} {...sliderObj}/>
                    )}
                </article>
                button
            </section>
            <section className="Main_EventSection">

            </section>
        </main>
     );
}

export default Main;