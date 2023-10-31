import './Main.css'
import * as THREE from 'three'
import { useEffect } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import model from './model/scene.gltf'


const Main = () => {
    useEffect(() => {
        //GLTF Loader
        const gltfLoader = new GLTFLoader();
        let mixer;
        gltfLoader.load(model, (gltf)=>{    
            const imgs = gltf.scene.children[0];
            console.log(imgs)
            imgs.position.x = -1;
            imgs.position.y = -1.3;
            scene.add(imgs)
            camera.lookAt(imgs)
            mixer = new THREE.AnimationMixer( gltf.scene);

            
            const actions = [];
            actions[0] = mixer.clipAction(gltf.animations[0]);
            actions[1] = mixer.clipAction(gltf.animations[1]);
            actions[2] = mixer.clipAction(gltf.animations[2]);
            actions[0].play();
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
        camera.position.x = 2;

        // light 
        const ambientLight = new THREE.AmbientLight('white', 4);
        scene.add(ambientLight);

        // 컨트롤 셋팅
        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enabled = true
        const clock = new THREE.Clock();
        const animate = ()=>{
                const time = clock.getElapsedTime();
            controls.update()
            if(mixer) mixer.update(time)
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

            </section>
            <section className="Main_Gallery">

            </section>
        </main>
     );
}

export default Main;