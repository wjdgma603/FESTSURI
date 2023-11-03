import './Party.css';
import Party_poster from './Comp/Party_poster';
import Party_comp from './Comp/Party_poster.json'


function Party(){
    return (
        <div className="party">
                    <section className='party_top'>
            <h2>행사</h2>
        </section>
        <section className='party_middle'>
            <ul className='party_go'>
                <li><a>홈</a></li>
                <li className='party_arrow'></li>
                <li><a>행사</a></li>
            </ul>
            <section className="party_poster1">
              {Party_comp.map((ParComp)=>
                 <Party_poster {...ParComp} />
                 )}
            </section>
            </section>
            <div>
            </div>
        </div>
      );
}
 
export default Party