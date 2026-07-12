"use client";

import { useEffect } from "react";

export default function ScrollBodyClass() {
  useEffect(() => {
    let hasScrolled = false;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }

      if (!hasScrolled && window.scrollY > 0) {
        document.body.classList.add("scroll-started");
        hasScrolled = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
