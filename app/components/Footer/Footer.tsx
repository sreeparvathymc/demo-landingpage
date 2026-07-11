import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

const footerLinks = {
  col1Links: [
    { name: "Overview", url: "/" },
    { name: "Solutions", url: "/" },
    { name: "Process", url: "/" },
    { name: "Platform Preview", url: "/" },
    { name: "Pricing", url: "/" },
    { name: "Request Demo", url: "/" },
  ],
  col2Links: [
    { name: "Terms of Service", url: "/" },
    { name: "Privacy Policy", url: "/" },
    { name: "FAQs", url: "/" },
  ],


  col3Links: [
    {
      name: "USA",
      url: "/",
      img: "/icons/footer-location.svg",
    },
    {
      name: "+971 51 547 3625",
      url: "/",
      img: "/icons/footercall.svg",
    },
  ],


  col4Links: [
    {
      icon: "/icons/ss-linkedin.svg",
      url: "/",
      alt: "LinkedIn",
    },
    {
      icon: "/icons/ss-instagram.svg",
      url: "/",
      alt: "Instagram",
    },
    {
      icon: "/icons/ss-emaill.svg",
      url: "/",
      alt: "email",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="footer-session">
      <div className="footer-container">
        <div className="footer-div">
          <div className="foot-video">
            <video autoPlay loop muted playsInline controls={false}>
              <source src="/videos/footer_video.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="footer-items">
            <div className="footer-links">
              {/* ---------------- */}

              <div className="footer-col col1">
                <h4>Product</h4>

                <ul>
                  {footerLinks.col1Links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* ---------------- */}

              <div className="footer-col col2">
                <h4>Company & Resources</h4>

                <ul>
                  {footerLinks.col2Links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* ---------------- */}

              <div className="footer-col col3">
                <h4>Contact</h4>

                <ul>
  {footerLinks.col3Links.map((link, index) => (
    <li key={index}>
      <Link href={link.url}>
        <img src={link.img} alt={link.name} />
        <span>{link.name}</span>
      </Link>
    </li>
  ))}
</ul>
              </div>

              {/* ---------------- */}

              <div className="footer-col col4">
                <h4>Connect</h4>

                <ul>
                  {footerLinks.col4Links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={link.icon}
                          alt={link.alt}
                          width={24}
                          height={24}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="copy-text">
              <p>© 2026 Lorem.app. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
