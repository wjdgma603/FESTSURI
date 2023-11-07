
import './Party_sub_poster.css'
import dlsk from  '../'

const Party_sub_poster = ({ id, title, sub_title1, sub_title2, sub_title3, sub_title4, sub_title5, sub_title6, sub_title7, sub_title8,
    party_info1, party_info2, party_info3, party_info4, party_info5, party_info6, party_info7,sub_img }) => {
    return (
        <div className='Party_sub_poster'>

            <img className='Party_sub_poster_img' src={require("../images/psp" + id + ".png")} />
            <div>
                <p className='Party_sub_poster_title'>{title}</p>
                <p className='Party_sub_poster_sub_title'>{sub_title1}</p>
                <p className='Party_sub_poster_sub_title'>{sub_title2}</p>
                <p className='Party_sub_poster_sub_title'>{sub_title3}</p>
                <p className='Party_sub_poster_sub_title'>{sub_title4}</p>
                <p className='Party_sub_poster_sub_title'>{sub_title5}</p>
                <p className='Party_sub_poster_sub_title'>{sub_title6}</p>
                <p className='Party_sub_poster_sub_title'>{sub_title7}</p>
                <p className='Party_sub_poster_sub_title'>{sub_title8}</p>
                <p className='Party_sub_poster_party_info1'>{party_info1}</p>
                <p className='Party_sub_poster_party_info2'>{party_info2}</p>
                <p className='Party_sub_poster_party_info3'>{party_info3}</p>
                <p className='Party_sub_poster_party_info4'>{party_info4}</p>
                <p className='Party_sub_poster_party_info5'>{party_info5}</p>
                <p className='Party_sub_poster_party_info6'>{party_info6}</p>
                <p className='Party_sub_poster_party_info7'>{party_info7}</p>
                <img className='Party_sub_map' src={require("../images/map" + id + ".png")} />
            </div>

        </div>
    );
}

export default Party_sub_poster