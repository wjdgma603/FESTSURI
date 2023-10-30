import './Main.css'
import * as THREE from 'three'


const Main = () => {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        ThreeSec.clientWidth / ThreeSec.clientHeight,
        0.1,
        100
    );
    const renderer = new THREE.WebGLRenderer({
        antialias : true
    });
    var ThreeSec = document.getElementById("ThreeS")
    // ThreeSec.appendChild( renderer.domElement )
    // setTimeout(()=>{ThreeSec.appendChild( renderer.domElement )},1000); 
    // renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1) 
    // renderer.setClearAlpha(0.5) 
    // renderer.setClearColor('#000') // 배경의 색상 설정
    // scene.background = new THREE.Color('#000')// 배경 색 설정
    // renderer.setSize( ThreeSec.clientWidth, ThreeSec.clientHeight );
    // console.log(ThreeSec)
    // renderer.render(scene, camera);


    return ( 
        <main className="Main">
            <section className="Main_IntroSection">
                <article className='Text_Sector'>
                    <h1>아름다운 축제와<br className='Mobile_space'/>행복한 추억이 가득한<br className='Mobile_space'/><span>페스츠리</span>와 함께</h1>
                    <p>패스츠리 지금 여기에서 특별한 여정을, 다채로운 문화, 예술, 그리고 무수한 활동으로 가득 차 있습니다.</p>
                </article>
                <div id='ThreeS'></div>
            </section>
            <section className="Main_SlideSection">

            </section>
            <section className="Main_Gallery">

            </section>
        </main>
     );
}

export default Main;