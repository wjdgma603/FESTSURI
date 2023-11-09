
import './Party_sub_poster.css'

const Party_sub_poster = ({ id, title, sub_title1, sub_title2, sub_title3, sub_title4, sub_title5, sub_title6, sub_title7, sub_title8,
    party_info1, party_info2}) => {
    return (
        <div className='Party_sub_poster'>

            <img className='Party_sub_poster_img' src={require("../images/psp"+ id +".png")} alt='Party_sub_poster_img' />
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
                <p className='Party_sub_poster_party_info7'>{party_info2}</p>
            </div>

        </div>
    );
}

export default Party_sub_poster