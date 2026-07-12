"use client";


import PreviewCards from "../../ReusableCards/PreviewCard/PreviewCards";
import "./Platform.css";

const cardData = [
  {
    heading: "Create verification cases instantly.",
    description:
      "Add the applicant and issuer. Hit send. Lorem notifies everyone and tracks every step.",
    image: "/images/card1.png",
  },
  {
    heading: "Track real-time verification status",
    description:
      "See exactly where each case stands. No chasing emails. No missed follow-ups.",
    image: "/images/card2.png",
  },
  {
    heading: "View applicant approval activity",
    description:
      "Access the request, applicant consent. Every action is logged transparently and securely.",
    image: "/images/card3.png",
  },
  {
    heading: "Access issuer-verified documents",
    description:
      "Standard, secure. Download your verified files instantly whenever you need it.",
    image: "/images/card4.png",
  },
];

export default function PlatformCardSession() {
  return (
    <section className="wrapper">
      <div className="cards">
        {cardData.map((item, index) => (
          <div className="card-wrapper" key={index}>
            <PreviewCards
              heading={item.heading}
              description={item.description}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
