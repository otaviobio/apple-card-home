import "./MainNavbar.scss";
import { Link } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";
import { useEffect, useState } from "react";

const mainNavbarLinks = [
  { name: "Overview", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Family", path: "/family" },
  { name: "Monthly Installments", path: "/monthly-installments" },
  { name: "How-To Videos", path: "/how-to" },
];

export function MainNavbar({
  isHero = false,
}) {

  const [isSticky, setSticky] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  
  const mainNav = document.querySelector(".main-nav-container");
  const navOptions = { }
  
  useEffect(() => {
    const fixedNav = document.querySelector(".fixed-nav-container");

    const navObserver = new IntersectionObserver((entries, navObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setSticky(true);
          // mainNav.classList.add("sticky-nav");
        } else {
          setSticky(false);
          // mainNav.classList.remove("sticky-nav");
        }
      });
    }, navOptions)
  
    navObserver.observe(fixedNav);
  }, [isSticky]);
  
  return (
    <div
      className={`
          main-nav-container
          ${isHero ? 'hero-nav' : ''}
          ${isSticky ? 'sticky-nav' : ''}
          ${isMobileOpen ? 'mobile-open' : ''}
        `}
    >
      <nav
        className={`
          main-nav
        `}
      >
        <Link
          className={`
            fixed-nav-icon
            sticky-link
            ${!isHero ? '' : 'no-nav-icon'}
          `}
          to="/"
        >
          Apple Card
        </Link>
        <ul>
          {mainNavbarLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="right-nav-buttons">
          <button
            className="mobile-dropdown-btn"
            onClick={() => setMobileOpen(!isMobileOpen)}>
              <RxCaretDown />
          </button>
          <button className="apply-now-nav">Apply Now</button>
        </div>
      </nav>
    </div>
  );
}
