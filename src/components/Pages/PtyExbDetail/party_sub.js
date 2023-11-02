import './Party_sub.css'
import Party_sub_poster from './Comp/Party_sub_poster'
import Party_sub_comp from './Comp/Party_sub_poster.json'

function Party_sub(){
    const title = Party_sub_comp.map((title) => (<Party_sub_poster title= {title}/>))
    return ( 
        <div className="Party_sub">
        <section className='Party_sub_title'>
            <ul className='party_go'>
                <li><a>홈</a></li>
                <li className='party_arrow'></li>
                <li><a>행사</a></li>
                <li className='party_arrow'></li>
                <li>{title}</li>
            </ul>
            </section>
        </div>
     );
}
 
export default Party_sub;