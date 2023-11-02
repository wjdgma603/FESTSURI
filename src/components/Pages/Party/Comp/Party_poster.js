import './Party_poster.css'
const Party_poster = ({id,title,sub_title}) => {
    return (
        <div className='party_poster'>
            <img className='party_poster_img' src={require("../../../../images/Party/par"+id +".png")} />
            <p className='party_poster_title'>{title}</p>
            <p  className='party_poster_sub_title'>{sub_title}</p>
        </div>
      );
}
 
export default Party_poster;