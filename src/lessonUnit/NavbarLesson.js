import React from "react";

import "./LessonUnit.css";

function NavbarLesson() {
  return (
    // <div className="container-fluid">
    <div className="row">
      <div className="col-3 col-md-2 d-flex justify-content-center box-button">
        PREVIOUS
      </div>
      <div className="col-6 col-md-3 d-flex justify-content-center box-button">
        LESSON TITLE
      </div>
      <div className="col-3 col-md-2 d-flex justify-content-center box-button">
        NEXT
      </div>
      <div className="col-3 col-md-2 d-flex justify-content-center box-button">
        TEXT
      </div>
      <div className="col-3 col-md-1 d-flex justify-content-center box-button">
        EX_1
      </div>
      <div className="col-3 col-md-1 d-flex justify-content-center box-button">
        EX_2
      </div>
      <div className="col-3 col-md-1 d-flex justify-content-center box-button">
        EX_3
      </div>
    </div>
    // </div>
  );
}

export default NavbarLesson;
