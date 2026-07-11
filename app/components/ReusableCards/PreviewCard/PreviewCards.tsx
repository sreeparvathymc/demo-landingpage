import Image from "next/image";
import React from "react";
import "./Preview.css"


type PreviewCardsProps = {
  heading?: string;
  description?: string;
  image?: string;
  alt?: string;
};

const PreviewCards = ({
  heading,
  description,
  image,
  alt = "Preview Image",
}: PreviewCardsProps) => {
  return (
    <div className="prevcard-outer">
      <div className="prevcol1">
        {heading && <h3>{heading}</h3>}
        {description && <p>{description}</p>}
      </div>

      <div className="prevcol2">
        {image && (
          <Image
            src={image}
            alt={alt}
            width={500}
            height={350}
          />
        )}
      </div>
    </div>
  );
};

export default PreviewCards;