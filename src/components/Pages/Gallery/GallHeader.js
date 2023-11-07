import "./GallHeader.css";




const GallHeader = () => {
    return ( 
        <section className="GallHeader">
            <article className="GallHeadBack">
            <h1>참여 갤러리</h1>
            <img src={require("./images/image&text_001.jpg")}></img>
            
            </article>
        </section>
     );
}
 
export default GallHeader;