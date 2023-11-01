import './Exhibition.css';
import Poster from './Comp/Poster';
import Poster_comp from './Comp/Poster.json'

function Exhibition (){
    return(
    <div className="Exhibition">
        <section className='sub_top'>
            <h2>전시·공연</h2>
        </section>
        <section className='sub_middle'>
            <ul className='sub_go'>
                <li><a>홈</a></li>
                <li className='sub_arrow'></li>
                <li><a>전시·공연</a></li>
            </ul>
            </section>
            {Poster_comp.map((PosComp)=>
                <Poster {...PosComp}/>
            )}
            
    </div>
    )
}

export default Exhibition;