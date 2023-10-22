import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";

const LottieAnimation = ({ animationData, width, height }) => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, [animationData]);

  return (
    <div
      ref={container}
      style={{ width: width, height: height }}
    />
  );
};

export default LottieAnimation;
