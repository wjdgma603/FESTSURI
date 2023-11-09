import './Poster.css';
import { Link } from 'react-router-dom';
const Poster = ({ png, title, sub_title }) => {
    return (
        <div className='poster'>
            <Link to='/ExhibitionSub' state={{ type: png }}>
                <img className='poster_img' src={require("../images/ex" + png + ".png")} alt='poster_img' />
                <p className='poster_title'>{title}</p>
                <p className='poster_sub_title'>{sub_title}</p></Link>
        </div>
    )
}

export default Poster;