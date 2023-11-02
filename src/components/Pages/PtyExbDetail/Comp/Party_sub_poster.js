import './Party_sub_poster.css'

const Party_sub_poster= ({id,title,sub_title}) => {
    return (  
        <div className='Party_sub_poster'>
            <img className='Party_sub_poster_img' src={require("../../../../images/Party/Party_sub/par"+id+".png")}/>
            <div>
            <p className='Party_sub_poster_title'>{title}</p>
            <p className='Party_sub_poster_sub_title'>{sub_title}</p>
            </div>
        </div>
    );
}
 
export default Party_sub_poster