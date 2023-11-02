import './Exhibition.css';
import Poster from './Comp/Poster.js';
import Poster_comp from './Comp/Poster.json';

function Exhibition (){
    return(
    <div className="Exhibition">
        <section className='exh_top'>
            <h2>전시·공연</h2>
        </section>
        <section className='exh_middle'>
            <ul className='exh_go'>
                <li>홈</li>
                <li className='exh_arrow'></li>
                <li><a>전시·공연</a></li>
            </ul>
            <ul class="exh_menu">
                    <li><button class="exh_tab_menu_1" data-text="전시" data-id="exhi" href="javascript:void(0)">전시</button></li>
                    <li><button class="exh_tab_menu_2" data-text="공연" data-id="show" href="javascript:void(0)">공연</button></li>
                </ul>
            </section>
            <section id='exhi' className='exh_posters1 none'>
            {Poster_comp.map((PosComp)=>
                <Poster {...PosComp}/>
            )}
            </section>
            <section id='show' className='exh_posters2 none'>

            </section>
    </div>
    )
}

export default Exhibition;