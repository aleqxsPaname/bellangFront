import React from "react";

import Lessons from ".././lessons/Lessons";
import HeroSection from "../sections/HeroSection";
import Filter from "../sections/Filter";

function LessonList() {
  return (
    <>
      <HeroSection />
      <Filter />
      <Lessons />
    </>
  );
}

export default LessonList;
