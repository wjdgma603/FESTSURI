import './Poster.css';
import { Link } from 'react-router-dom';
const Poster = ({ png, title, sub_title }) => {
    return (
        <div className='poster'>
            <Link to='/Exhibition_sub' state={{ type: png }}>
                <img className='poster_img' src={require("../images/ex" + png + ".png")} />
                <p className='poster_title'>{title}</p>
                <p className='poster_sub_title'>{sub_title}</p></Link>
        </div>
    )
}

export default Poster;