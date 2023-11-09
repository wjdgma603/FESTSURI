
import './Exhibition_poster.css'

const Exhibition_sub_poster = ({ id, title, sub_title1, sub_title2, sub_title3, sub_title4, sub_title5, sub_title6, sub_title7, sub_title8,
    Exhibition_info1, Exhibition_info2 }) => {
    return (
        <div className='Exhibition_sub_poster'>

            <img className='Exhibition_sub_poster_img' src={require("../images/ex" + id + ".png")} alt='Exhibition_sub_poster_img' />
            <div>
                <p className='Exhibition_sub_poster_title'>{title}</p>
                <p className='Exhibition_sub_poster_sub_title'>{sub_title1}</p>
                <p className='Exhibition_sub_poster_sub_title'>{sub_title2}</p>
                <p className='Exhibition_sub_poster_sub_title'>{sub_title3}</p>
                <p className='Exhibition_sub_poster_sub_title'>{sub_title4}</p>
                <p className='Exhibition_sub_poster_sub_title'>{sub_title5}</p>
                <p className='Exhibition_sub_poster_sub_title'>{sub_title6}</p>
                <p className='Exhibition_sub_poster_sub_title'>{sub_title7}</p>
                <p className='Exhibition_sub_poster_sub_title'>{sub_title8}</p>
                <p className='Exhibition_sub_poster_Exhibition_info1'>{Exhibition_info1}</p>
                <p className='Exhibition_sub_poster_Exhibition_info7'>{Exhibition_info2}</p>
            </div>

        </div>
    );
}

export default Exhibition_sub_poster