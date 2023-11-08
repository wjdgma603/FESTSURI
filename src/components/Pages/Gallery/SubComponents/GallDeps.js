import "./GallDeps.css";
import { Link } from "react-router-dom";



const GallDeps = () => {
  return (
    <section className="GallDeps">
      <article className="Gall_DepsPadding"> 
        <div className="Gall_BtnFlex">
          <div className="Gall_DepsBtn">
            <Link to="/">홈</Link></div>
          <div className="Gall_Center">＞</div>
          <div className="Gall_DepsBtn">
            <a>참여갤러리</a></div>
        </div>
      </article>
    </section>
  );
};

export default GallDeps;
