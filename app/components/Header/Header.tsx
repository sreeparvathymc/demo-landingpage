"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Solution", url: "/" },
  { name: "Process", url: "/" },
  { name: "Industries", url: "/" },
  { name: "Platform", url: "/" },
  { name: "Contact", url: "/" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Desktop */}
      <div className="header-container for-desk">
        <div className="logo">
          <Image src="/icons/logo.png" alt="Logo" width={40} height={40} />
        </div>

        <nav>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/" className="sign-inbtn">
          Sign In
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width="14"
  height="14"
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

      {/* Mobile */}
      <div className="header-container for-mob">
        <div className="logo">
          <Image src="/icons/logo.png" alt="Logo" width={40} height={40} />
        </div>

        <div className="mob-right">
          <Link href="/" className="sign-inbtn">
            Sign In

            <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
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

          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.url} onClick={() => setMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;