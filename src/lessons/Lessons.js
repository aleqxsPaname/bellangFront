import React from "react";
import CardLesson from ".././cardLessons/CardLesson";

import lessons from ".././services/lessons";

function Lessons() {
  return (
    <>
      <div className="row">
        {lessons.map((lesson) => (
          <div className="col-12 col-lg-4">
            <CardLesson lesson={lesson} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Lessons;
