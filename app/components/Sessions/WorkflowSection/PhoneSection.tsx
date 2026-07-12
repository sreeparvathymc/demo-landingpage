"use client";

import Image from "next/image";
import "./Phonesesion.css";
const users = [
  "/images/avathar1.png",
  "/images/avathar1.png",
  "/images/avathar1.png",
];

export default function PhoneSection() {
  return (
    <div className="phone-section">
      <div className="ph-outer">
        <Image src="/images/iPhone.png" alt="Mobile" width={420} height={850} />












      </div>

       <div className="sticky-overlap">

           <div className="trust-card">
          <div className="avatars">
            {users.map((user, index) => (
              <Image
                key={index}
                src={user}
                alt={`User ${index + 1}`}
                width={42}
                height={42}
              />
            ))}
          </div>

          <div className="trust-content">
            <h3>250+</h3>
            <p>trusted organizations</p>
          </div>
        </div>

        <div className="verified-card">
          <div className="verified-icon">
            <Image
              src="/icons/verified.svg"
              alt="Verified"
              width={40}
              height={40}
            />
          </div>

          <div className="verified-content trust-content">
            <h3>10,000+</h3>
            <p>
              credentials verified
              <br />
              securely
            </p>
          </div>
        </div>

        </div>
    </div>
  );
}
