import React from "react";

import "./CardLessons.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function cardLesson(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <Link to="/lesson">
              {props.lesson.order}/ {props.lesson.name}
            </Link>
          </h5>
          <p className="card-text">Contenu textuel de la carte</p>
        </div>
      </div>
    </div>
  );
}

export default cardLesson;
