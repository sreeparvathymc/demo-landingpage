import Image from "next/image";
import Link from "next/link";
import "./Header.css"

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Solution", url: "/" },
  { name: "Process", url: "/" },
  { name: "Industries", url: "/" },
  { name: "Platform", url: "/" },
  { name: "Contact", url: "/" },
];

const Header = () => {
  return (
    <header>
      <div className="header-container">

        <div className="logo">

           <Image
            src="/icons/logo.png"
            alt="Arrow"
            width={35}
            height={35}
          />

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
          <span>
             {/* <Image
            src="/icons/arrow.svg"
            alt="Arrow"
            width={20}
            height={20}
          /> */}

          <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
          </span>


        </Link>





      </div>
    </header>
  );
};

export default Header;