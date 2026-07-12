"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./RotatingDiv.css";

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
        threshold: 0.15, // Trigger when 15% of the element is in view
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
      setAngle((prev) => prev + 40); // 5 elements = 360 / 5 = 72 degrees step clockwise
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="rot-outer"
      style={{ "--rot-angle": `${angle}deg` } as React.CSSProperties}
    >
      <div className="rotator">


        <div className="rot-row row22">
          <div className="rot-rowin">
            <div className="icon-rotateer">
              <Image src="/icons/icon4.svg" alt="img" width={35} height={35} />
            </div>
            <h6>
              Immigration
              <span>Law Firms</span>
            </h6>
          </div>




        </div>

        <div className="rot-row row33">
          <div className="rot-rowin">
            <div className="icon-rotateer">
              <Image src="/icons/icon1.svg" alt="img" width={35} height={35} />
            </div>
            <h6>
              Compliance &<span>Mobility Teams</span>
            </h6>
          </div>


        </div>

        <div className="rot-row row44">
          <div className="rot-rowin">
            <div className="icon-rotateer">
              <Image src="/icons/icon4.svg" alt="img" width={35} height={35} />
            </div>
            <h6>
              Financial
              <span>Institutions</span>
            </h6>
          </div>


        </div>

        <div className="rot-row row55">
          <div className="rot-rowin">
            <div className="icon-rotateer">
              <Image src="/icons/icon2.svg" alt="img" width={35} height={35} />
            </div>

            <h6>
              HR & Recruitment
              <span>Firms</span>
            </h6>

          </div>


        </div>
        <div className="rot-row row66">
          <div className="rot-rowin">
            <div className="icon-rotateer">
              <Image src="/icons/icon3.svg" alt="img" width={35} height={35} />
            </div>

            <h6>
              Universities & Training
              <span>Institutes</span>
            </h6>

          </div>


        </div>



      </div>

      <div className="rot-div33">
        <div className="rot-div22">
          <div className="rot-div11">
            <div className="logo-22">
              <Image src="/icons/logo.png" alt="Arrow" width={35} height={35} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingDiv;
