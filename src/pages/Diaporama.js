import React from "react";

import "./diaporama.css";

function Diaporama() {
  return (
    <div>
      <h1>Here the diaporama</h1>
      <div className="container-overlayed">
        <div className="row fluid">
          <img className="fluid" src="../images/img-2rs.png" width="100%" />
          {/* <div className="col-2"> */}
          <div className="top left overlay col-7">
            <span className="top left overlay">
              This is the picnic islands in the Maldive. Visited by over 2
              millions tourists a year!
            </span>
          </div>
          <div className="centered-v left overlay col-6">
            <span className="centered-v left overlay">
              White sand and palm trees make a nice spot for instagramers!
            </span>
          </div>
          <div className="bottom right overlay col-7">
            <span className="bottom right overlay">
              The islands are a shelter for many species, such as the great
              white shark...
            </span>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Diaporama;
