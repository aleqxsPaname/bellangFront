import React from "react";

import "./diaporama.css";

import diaporamas from ".././services/diaporama.json";

function Diaporama() {
  let numberOfSlide = diaporamas.length;
  let diaporama = diaporamas[0];

  return (
    <div>
      <h1>
        {diaporama.title} (1/{numberOfSlide})
      </h1>
      <div className="container-overlayed">
        <div className="row fluid">
          <img className="fluid" src={diaporama.imgsource} width="100%" />
          {diaporama.sentences.map((sentence) => (
            <div
              className={`overlay ${sentence.locationcol} ${sentence.location}`}
            >
              <span className={sentence.location}>{sentence.sentence}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Diaporama;
