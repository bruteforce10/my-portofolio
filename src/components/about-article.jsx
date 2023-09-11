import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const AboutArticle = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const splitTypes = document.querySelectorAll(".reveal-type");
    splitTypes.forEach((char) => {
      const text = new SplitType(char, { types: " chars" });
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        y: -20,
        scaleY: 0,
        transformOrigin: "top",
        stagger: 0.1,
      });
    });
  }, []);
  return (
    <article className="reveal-type text-left max-w-[70rem] mt-[2rem] md:mt-[3rem] space-y-6">
      <p className="md:text-[1.7rem] text-[1.2rem]  text-text leading-relaxed">
        I am a freelance frontend developer based in Tangerang Selatan,
        Indonesia. Despite not having an IT background, I have a strong passion
        and deep interest in web development, particularly in the frontend dev.
        My journey began when I created an Android application using React
        Native to calculate building materials for a house. It was during this
        project that I fell in love with the world of programming.
      </p>
      <p className="reveal-type md:text-[1.7rem] text-[1.2rem]  text-text leading-relaxed">
        I have gained knowledge through various courses and self-study, diving
        deeper into web development and exploring coding beyond the courses. I
        am constantly driven to learn and grow in this field, and I hope to make
        a positive impact in the industry.
      </p>
    </article>
  );
};

export default AboutArticle;
