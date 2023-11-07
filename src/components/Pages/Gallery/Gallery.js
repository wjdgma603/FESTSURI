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
      <img
        src={require(`./images/data_${data.id}.jpg`)}
        onClick={() => openModal(data)}
      />
      {selectedData && selectedData.id === data.id && (
        <div className="GallModalTop" onClick={closeModal}>
          <div className="GallModal-Content">
            <img src={require(`./images/data_${data.id}.jpg`)} />
            <h5>{data.usetitle}</h5>
            <div
              className="GallJsonText"
              dangerouslySetInnerHTML={{
                __html: data.useDeta.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        </div>
      )}
    </div>
  ));

// // .............................

//   const renderTabNumbers = () => {
//     const buttons = [];
//     let totalPagesToUse = filteredData
//       ? Math.ceil(filteredData.length / 18)
//       : totalPages;
//     let currentPageToUse = filteredData ? 1 : currentPage;
//     const maxTabNumbers = totalPagesToUse < 5 ? totalPagesToUse : 5;
//     const halfMaxTabs = Math.floor(maxTabNumbers / 2);

//     if (totalPagesToUse > maxTabNumbers) {
//       if (currentPageToUse > halfMaxTabs + 1) {
//         buttons.push(
//           <div
//             className="brd_TapFirstPageBtn"
//             key="first"
//             onClick={() => changePage(1)}
//           >
//             <i></i>
//           </div>
//         );
//         buttons.push(
//           <div
//             className="brd_TapPrevPageBtn"
//             key="prev"
//             onClick={handlePrevPage}
//           >
//             <i></i>
//           </div>
//         );
//       }

//       let start = 1;
//       let end = maxTabNumbers;

//       if (currentPage > halfMaxTabs) {
//         if (currentPage + halfMaxTabs < totalPages) {
//           start = currentPage - halfMaxTabs;
//           end = currentPage + halfMaxTabs;
//         } else {
//           end = totalPages;
//           start = totalPages - maxTabNumbers + 1;
//         }
//       }

//       for (let i = start; i <= end; i++) {
//         buttons.push(
//           <div
//             key={i}
//             onClick={() => changePage(i)}
//             className={i === selectedTab ? "selected" : ""}
//           >
//             {i}
//           </div>
//         );
//       }

//       if (currentPage < totalPages - halfMaxTabs) {
//         buttons.push(
//           <div
//             className="brd_TapNextPageBtn"
//             key="next"
//             onClick={handleNextPage}
//           >
//             <i></i>
//           </div>
//         );
//         buttons.push(
//           <div
//             className="brd_TapLastPageBtn"
//             key="last"
//             onClick={() => changePage(totalPages)}
//           >
//             <i></i>
//           </div>
//         );
//       }
//     } else {
//       for (let i = 1; i <= totalPages; i++) {
//         buttons.push(
//           <div
//             key={i}
//             onClick={() => changePage(i)}
//             className={i === selectedTab ? "selected" : ""}
//           >
//             {i}
//           </div>
//         );
//       }
//     }

//     return buttons;
//   };




// // ..........................



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

      {/* <article className="aaaaaaaaa">
        <div>{renderTabNumbers()}</div>
      </article> */}

      <article></article>
    </section>
  );
};

export default Gallery;
