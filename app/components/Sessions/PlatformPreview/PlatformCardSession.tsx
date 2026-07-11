// import React from "react";
// import "./Platform.css";
// import PreviewCards from "../../ReusableCards/PreviewCard/PreviewCards";

// const previewData = [
//   {
//     heading: "Create verification cases instantly.",
//     description:
//       "Add the applicant and issuer. Hit send. Lorem notifies everyone and tracks every step.",
//     image: "/images/card1.png",
//   },
//   {
//     heading: "Track real-time verification status",
//     description:
//       "See exactly where each case stands. No chasing emails. No missed follow-ups.",
//     image: "/images/card2.png",
//   },
//   {
//     heading: "View applicant approval activity",
//     description:
//       "Access the request, applicant consent. Every action is logged transparently and securely.",
//     image: "/images/card3.png",
//   },
//   {
//     heading: "Access issuer-verified documents",
//     description:
//       "Standard, secure. Download your verified files instantly whenever you need it.",
//     image: "/images/card4.png",
//   },
// ];

// const PlatformCardSession = () => {
//   return (
//     <div className="platform-card-session">
//       {previewData.map((item, index) => (
//         <PreviewCards
//           key={index}
//           heading={item.heading}
//           description={item.description}
//           image={item.image}
//         />
//       ))}
//     </div>
//   );
// };

// export default PlatformCardSession;



"use client";

import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import PreviewCards from "../../ReusableCards/PreviewCard/PreviewCards";
import "./Platform.css";

// gsap.registerPlugin(ScrollTrigger);

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
// useEffect(() => {
//   const wrappers = gsap.utils.toArray(".card-wrapper");

//   wrappers.forEach((wrapper: any, i) => {
//     const isLast = i === wrappers.length - 1;

//     ScrollTrigger.create({
//       trigger: wrapper,

//       // Last card pins at top:0
//       start: isLast ? "top top" : `top ${60 + i * 120}`,

//       endTrigger: isLast ? ".cards" : wrappers[wrappers.length - 1],
//       end: isLast ? "bottom bottom" : "top top",

//       pin: true,
//       pinSpacing: false,
//       scrub: true,
//     });
//   });

//   return () => ScrollTrigger.getAll().forEach((st) => st.kill());
// }, []);

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