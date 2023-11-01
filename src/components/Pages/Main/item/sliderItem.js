import { Link } from "react-router-dom";

const SliderItem = ({sliderNum, sliderLink}) => {
    return ( 
        <div className='Slide'>
            <Link to={sliderLink}>
                <img src={require("../../../../images/Main/pcSlide/slide0"+sliderNum+".jpg")} alt=""/>
            </Link>
        </div>
        
     );
}
 
export default SliderItem;