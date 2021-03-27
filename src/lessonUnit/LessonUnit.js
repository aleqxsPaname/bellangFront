import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import lesson from ".././services/lesson1";
import DisplaySentence from "./DisplaySentence";
import NavbarLesson from "./NavbarLesson";

function LessonUnit() {
  let { id } = useParams();

  return (
    <>
      <NavbarLesson />
      <div className="row">
        <div className="col">
          <h2>
            TITLES: {lesson[id - 1].title} - (id={id})
          </h2>
        </div>
      </div>
      <div className="row">
        {lesson[id - 1].sentences.map((lessonSentence) => (
          <div className="col-12">
            <DisplaySentence sentence={lessonSentence} />
          </div>
        ))}
      </div>
    </>
  );
}

export default LessonUnit;
