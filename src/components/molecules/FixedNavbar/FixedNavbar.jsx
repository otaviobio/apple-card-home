import "./FixedNavbar.scss";
import { Link } from "react-router-dom";
import { DiApple } from "react-icons/di";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";

const fixedNavbarLinks = [
  { name: "Store", path: "/" },
  { name: "Mac", path: "/" },
  { name: "iPad", path: "/" },
  { name: "iPhone", path: "/" },
  { name: "Watch", path: "/" },
  { name: "AirPods", path: "/" },
  { name: "TV & Home", path: "/" },
  { name: "Only on Apple", path: "/" },
  { name: "Accessories", path: "/" },
  { name: "Support", path: "/" },
];

export function FixedNavbar() {
  return (
    <div className="fixed-nav-container">
      <nav id="fixed-nav">
        <Link className="fixed-nav-icon nav-apple" to="/">
          <DiApple />
        </Link>
        <ul>
          {fixedNavbarLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <Link className="fixed-nav-icon menu" to="/">
          <HiMenuAlt4 />
        </Link>
        <Link className="fixed-nav-icon search" to="/">
          <CiSearch />
        </Link>
        <Link className="fixed-nav-icon cart" to="/">
          <IoBagOutline />
        </Link>
      </nav>
    </div>
  );
}
