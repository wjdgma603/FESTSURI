import "./Gallery.css";
import { useState } from "react";

import GallHeader from "./GallHeader";
import GallDeps from "./GallDeps";
import GallData from "./GallDeta.json";

const Gallery = () => {
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
  };

  const closeModal = () => {
    setSelectedData(null);
  };

  const Galllist = GallData.map((data) => (
    <div class="Gall_GridItem">
      <img src={require(`./images/data_${data.id}.jpg`)} onClick={() => openModal(data)} />
      {selectedData && selectedData.id === data.id && (
        <div className="GallModalTop">
          <div className="GallModal-Content" onClick={closeModal}>
            <img src={require(`./images/data_${data.id}.jpg`)}  />
            <h5>{data.usetitle}</h5>
            <div className="GallJsonText" dangerouslySetInnerHTML={{ __html: data.useDeta.replace(/\n/g, '<br />') }} />
          </div>
        </div>
      )}
    </div>
  ));

  return (
    <section className="Gallery">
      <article>
        <GallHeader></GallHeader>
      </article>
      <article>
        <GallDeps></GallDeps>
      </article>
      <article className="Gall_GridSection">
        <div className="Gall_GridContainer">{Galllist}</div>
      </article>

      <article></article>
    </section>
  );
};

export default Gallery;