import React from "react";
import "./Platform.css";
import PlatformCardSession from "./PlatformCardSession";

const PrevieSection = () => {
  return (
    <div className="preview-section session">
      <div className="containers">
        <div className="preview-div">
          <div className="preview-col1">
            <h5>Platform Preview</h5>
            <h2>
              Verify documents from a<span>single dashboard.</span>
            </h2>
          </div>
          <div className="preview-col2">
            <p>
              One dashboard to request, track, and receive verified
              <span>credentials, from anywhere in the world.</span>
            </p>
          </div>
        </div>


        <div className="">
          <PlatformCardSession />
        </div>
      </div>
    </div>
  );
};

export default PrevieSection;
