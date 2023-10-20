import React from "react";
import { useInView } from "react-intersection-observer";

const ScrollRevealAnimation = ({ children, animation, triggerOnce, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: triggerOnce || true, // Use the provided prop or set to true by default
  });

  return (
    <div
      ref={ref}
      className={`animated ${inView ? `${animation}` : "animated"}`}
      triggerOnce={triggerOnce}
      delay={delay}
    >
      {children}
    </div>
  );
};

export default ScrollRevealAnimation;
