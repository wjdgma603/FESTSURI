import "./Introduce.css";
import ItrFESTSURI from "./ItrFESTSURI";


import img1 from "../../../images/Introduce/Introduce_001.jpg";
import img2 from "../../../images/Introduce/Vector_01.svg";
import img3 from "../../../images/Introduce/Vector_02.svg";
import img4 from "../../../images/Introduce/Introduce_001.jpg";

const Introduce = () => {
  return (
    <section className="Introduce">
      <article className="Itr_Section">
        <div className="Itr_Image">
          <img src={img1}></img>
        </div>
        <div className="Itr_Text">
          <div>
            <h1 className="Itr_MainText">환영합니다, '페스츠리'</h1>
            <p>
              축제의 의미를 가진 페스티벌(Festival) 과 마츠리(祭・まつり)로
              이루어진 ‘페스츠리’는 한국의 전통 축제인 고궁 개장 행사, 야간 기행
              등을 쉽게 경험할 수 있도록 여러 정보를 제공해드리고 있습니다.
            </p>

            <p>
              페스츠리는 다양한 사람들이 더 많은 축제를 즐길 수 있도록
              관문으로서의 역할을 수행하고 있습니다.
            </p>
            <div className="Itr_TextBorder"></div>
            <p>
              '페스츠리'는 축제를 통한 문화 교류의 장이기도 합니다.<br />
              우리와 함께 '페스츠리'의 세계로 빠져들어,<br />
              전통과 환희로 가득한 축제를 경험해보세요.
            </p>
          </div>
          <div className="Itr_TextImage">
            <img src={img2}></img>
          </div>

        </div>
      </article>

       <article className="Itr_Section">
        <div className="Itr_Text">
          <div>
            <h1 className="Itr_MainText">고궁행사와 야간기행의 매력적인 세계로</h1>
            <p>
              페스츠리는 역사와 전통의 아름다움을 만끽할 수 있는 고궁행사와 도시의 신비를 탐험하는
              야간기행을 소개하는 특별한 축제 플랫폼입니다.
            </p>
            <p className="Itr_MarginTop30">
              고궁행사에서는 한국의 역사와 문화를 느낄 수 있는 전통 축제의 향연을 경험하실 수 있습니다.
              복고풍의 한복으로 투명한 고궁의 정취를 만끽하고,<br />
              전통 음악과 무용, 예술에 빠져보세요.
            </p>
            </div> 
            <div className="Itr_TextImage2">
              <img src={img3}></img>
            </div>
                 
        </div>
        <div className="Itr_Image">
          <img src={img4}></img>
        </div>
      </article>
      <article>
        <ItrFESTSURI></ItrFESTSURI>
      </article>
 


    
    </section>

  );
};

export default Introduce;
