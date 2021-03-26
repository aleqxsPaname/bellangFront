import React from "react";

function DisplayLesson(props) {
  return (
    <>
      <p>
        {props.sentence.order}/ {props.sentence.sentence}
      </p>
    </>
  );
}

export default DisplayLesson;
