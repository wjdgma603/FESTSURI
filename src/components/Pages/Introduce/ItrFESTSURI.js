import "./ItrFESTSURI.css";

import img0 from "../../../images/Introduce/Logo_1.svg";
import img1 from "../../../images/Introduce/ItrFESTSURI_01.svg";
import img2 from "../../../images/Introduce/ItrFESTSURI_02.svg";
import img3 from "../../../images/Introduce/ItrFESTSURI_03.svg";
import img4 from "../../../images/Introduce/ItrFESTSURI_04.svg";

const ItrFESTSURI = () => {
  return (
    <section className="Itr_FESTSURI">
      <article>
        <div className="Itr_FestsuriLogo">
          <img src={img0}></img>
        </div>
        <div>
          <h2>'페스츠리'로 축제의</h2>
          <h2>매력을 발견하세요.</h2>
        </div>

        <div>
          <div className="Itr_Fixe1">
            <div>
              <div>
                <img src={img1}></img>
              </div>
              <div>
                <h3>전통의 아름다움과 활기</h3>
                <p>
                  '페스츠리'를 통해 고궁 개장 행사부터 야간기행의 환상적인
                  경험까지
                  <br />
                  다양한 전통 축제를 즐길 수 있습니다.
                </p>
              </div>
            </div>

            <div>
              <div>
                <img src={img2}></img>
              </div>
              <div>
                <h3>도시의 두 얼굴을 만나다</h3>
                <p>
                  주간의 고궁 행사와 야간의 기행은 도시를 미스터리와 매력으로
                  채웁니다.
                  <br />두 가지 경험을 통해 도시를 더 깊이 이해하고 탐험하세요.
                </p>
              </div>
            </div>
          </div>

          <div className="Itr_Fixe2">
            <div>
              <div>
                <img src={img3}></img>
              </div>
              <div>
                <h3>문화 교류와 새로운 친구들</h3>
                <p>
                  '페스츠리'는 축제를 통한 문화 교류의 장이기도 합니다.
                  <br />
                  새로운 사람들과 친구가 되고 공유하며 즐기는 경험을
                  만들어보세요.
                </p>
              </div>
            </div>

            <div>
              <div>
                <img src={img4}></img>
              </div>
              <div>
                <h3>열린 관문으로의 역할</h3>
                <p>
                '페스츠리'는 다양한 사람들이 다양한 축제를 경험할 수 있는 관문입니다. 
                  <br />
                  저희 페스츠리와 함께 더 많은 축제를 즐기세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ItrFESTSURI;
