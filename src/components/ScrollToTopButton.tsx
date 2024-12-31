import React, { useEffect, useState } from "react";
import "../css/Button.css";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 350) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="button-hover-animation-top" onClick={scrollToTop}>
          <i className="bi bi-arrow-up fs-1"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
