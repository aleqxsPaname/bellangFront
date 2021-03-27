import React from "react";

import "./LessonUnit.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function NavbarLesson() {
  let { id } = useParams();
  let previousId = +id - 1;
  let previous = "/lesson/" + previousId;
  let nextId = +id + 1;
  let next = "/lesson/" + nextId;

  return (
    // <div className="container-fluid">
    <div className="row">
      <div className="col-3 col-md-2 d-flex justify-content-center box-button">
        <Link className="button" to={previous}>
          PREVIOUS
        </Link>
      </div>
      <div className="col-6 col-md-3 d-flex justify-content-center box-button">
        LESSON TITLE
      </div>
      <div className="col-3 col-md-2 d-flex justify-content-center box-button">
        <Link className="button" to={next}>
          NEXT
        </Link>
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
