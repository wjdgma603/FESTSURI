import './Party_poster.css'
import { Link } from 'react-router-dom';
const Party_poster = ({ id, title, sub_title }) => {
    return (
        <div className='party_poster'>
            <Link to='/Party_sub' state={{ type: id }}>
                <img className='party_poster_img' src={require("../images/par" + id + ".png")} />
                <p className='party_poster_title'>{title}</p>
                <p className='party_poster_sub_title'>{sub_title}</p></Link>
        </div>
    );
}

export default Party_poster;