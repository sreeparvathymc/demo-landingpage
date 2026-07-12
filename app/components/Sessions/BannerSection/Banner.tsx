import "./Banner.css";
import Image from "next/image";
import Link from "next/link";
import PhoneSection from "./PhoneSection";

const Banner = () => {
  return (
    <div>
      <div className="banner-div">
        <div className="containers">
          <div className="banner-intro">
            <h1>
              Verification that
              <span>starts at the source.</span>
            </h1>

            <p>
              Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum
              <span> lorem ipsum Lorem ipsum lorem ipsum</span>
            </p>

            <div className="demo-btn">
              <Link href="" className=" book-btn">
                Book a Demo
                <span>
                  <Image
                    src="/icons/playbtn.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                </span>
              </Link>
              <Link href="" className="btn-forwork">
                See how it works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  color="#E78F01"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 15L15 5M15 5H8M15 5V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <PhoneSection />










        </div>
      </div>
    </div>
  );
};

export default Banner;
