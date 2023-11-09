import "./GallDeps.css";
import { Link } from "react-router-dom";



const GallDeps = () => {
  return (
    <section className="GallDeps">
      <article className="Gall_DepsWrap"> 
        <div className="Gall_BtnFlex">
          <div className="Gall_DepsBtn">
            <Link to="/">홈</Link></div>
          <div className="Gall_Center"></div>
          <div className="Gall_DepsBtn">
            <Link to="/gallery">참여갤러리</Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default GallDeps;
