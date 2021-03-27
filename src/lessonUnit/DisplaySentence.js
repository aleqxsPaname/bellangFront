import React from "react";

function DisplaySentence(props) {
  return (
    <>
      <p>
        {props.sentence.order}/ {props.sentence.sentence}
      </p>
    </>
  );
}

export default DisplaySentence;
