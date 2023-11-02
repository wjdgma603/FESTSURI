import "./Gallery.css";
// import ReactDOM from 'react-dom';
import React from 'react';

import GallHeader from "./GallHeader";
import GallDeps from "./GallDeps";
import GallData from "./GallDeta.json";


const Gallery = () => {
  const Galllist = GallData.map((data)=>(
    <div class="Gall_GridItem">{data.usetitle}{data.useDeta}</div>
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
      <div class="Gall_GridContainer">
          {Galllist}
      </div>
      </article>

      <article></article>
    </section>
  );
};

export default Gallery;
