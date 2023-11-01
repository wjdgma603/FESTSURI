import { Link } from 'react-router-dom';
import './Poster.css';
const Poster = ({id,img,title,sub_title})=>{
    return(
        <div className='poster'>
            <img className ='poster_img' src={require("../../../../images/Exhibition/ex"+id+".png")}/>
            <p className='poster_title'>{title}</p>
            <p className='poster_sub_title'>{sub_title}</p>
        </div>
    )
}

export default Poster;