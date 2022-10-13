import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-transparent absolute top-0 z-20 layout py-6 left-1/2 -translate-x-1/2 text-white">
      <Link to="/" className="text-2xl uppercase font-semibold tracking-normal">
        Bigleagues
      </Link>
      <nav className="">
        <ul className="flex items-center space-x-8 capitalize">
          <li className="nav-item">
            <Link to="/leagues" className="nav-link">
              leagues
            </Link>
          </li>

          <li className="nav-item">
            <a href="#howto" className="nav-link">
              How to
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
