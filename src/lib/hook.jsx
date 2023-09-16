import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { MyContext } from "./context/AppContext";

function useSectionView(section, threshold = 0.5) {
  const { ref, inView } = useInView({ threshold: threshold });

  const { setActiveSection, timeOfLastClick } = MyContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, timeOfLastClick, section]);

  return {
    ref,
  };
}

export default useSectionView;
