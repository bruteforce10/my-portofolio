import useSectionView from "@/lib/hook";
import React from "react";

function WorkExperience() {
  const { ref } = useSectionView("#work");
  return (
    <div id="work" className="mt-[200px] h-[1000px]" ref={ref}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime
      sint tenetur? Veniam ipsa blanditiis ullam dolores placeat. Excepturi,
      est.
    </div>
  );
}

export default WorkExperience;
