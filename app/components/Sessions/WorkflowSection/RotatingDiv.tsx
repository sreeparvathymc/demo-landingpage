"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./RotatingDiv.css";

const items = [
  {
    icon: "/icons/icon4.svg",
    title1: "Immigration",
    title2: "Law Firms",
  },
  {
    icon: "/icons/icon1.svg",
    title1: "Compliance &",
    title2: "Mobility Teams",
  },
  {
    icon: "/icons/icon4.svg",
    title1: "Financial",
    title2: "Institutions",
  },
  {
    icon: "/icons/icon2.svg",
    title1: "HR & Recruitment",
    title2: "Firms",
  },
  {
    icon: "/icons/icon3.svg",
    title1: "Universities & Training",
    title2: "Institutes",
  },
];

const RotatingDiv = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setAngle((prev) => prev + 72); // Rotate in 72-degree steps (360 / 5 elements)
    }, 3000); // 3 seconds per transition for a premium feel

    return () => {
      clearInterval(interval);
    };
  }, [isInView]);

  // Calculate the active index currently at the top of the wheel (0 degrees)
  const activeIndex = Math.round((5 - (angle / 72) % 5) % 5);

  return (

    <div className="rot-wrapp">

       <div
      ref={containerRef}
      className="rot-outer"
      style={{ "--rot-angle": `${angle}deg` } as React.CSSProperties}
    >
      {/* Rotating Orbit and Items Container */}
      <div className="rotator">
        {items.map((item, index) => {
          const itemAngle = index * 72;
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className={`rot-row row-${index}`}
              style={{ "--item-angle": `${itemAngle}deg` } as React.CSSProperties}
            >
              <div className={`rot-rowin ${isActive ? "active" : ""}`}>
                <div className="icon-rotateer">
                  <Image src={item.icon} alt={item.title1} width={24} height={24} />
                </div>
                <h6>
                  {item.title1}
                  <span>{item.title2}</span>
                </h6>
              </div>
            </div>
          );
        })}
      </div>

      {/* Central Concentric Squircles (Orbits) */}
      <div className="center-orbit orbit-4"></div>
      <div className="center-orbit orbit-3"></div>
      <div className="center-orbit orbit-2"></div>
      <div className="center-orbit orbit-1"></div>

      {/* Center Logo */}
      <div className="logo-container">
        <div className="logo-box">
          <Image src="/icons/logo.png" alt="Brand Logo" width={35} height={35} />
        </div>
      </div>
    </div>

    </div>







  );
};

export default RotatingDiv;
