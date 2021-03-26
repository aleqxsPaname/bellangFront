import React from "react";

import lesson from ".././services/lesson1";
import DisplayLesson from "./DisplayLesson";
import NavbarLesson from "./NavbarLesson";

function LessonUnit() {
  return (
    <>
      <NavbarLesson />
      <div className="row">
        {lesson.map((lessonSentence) => (
          <div className="col-12">
            <DisplayLesson sentence={lessonSentence} />
          </div>
        ))}
      </div>
    </>
  );
}

export default LessonUnit;
