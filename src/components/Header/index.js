import React from "react";
import Link from "gatsby-link";

const Header = () => (
  <div className="bg-teal">
    <div className="flex justify-between max-w-xl mx-auto p-8">
      <h1 className="text-lg">
        <Link to="/" className="no-underline text-white">
          Gatsby Starter Tailwind
        </Link>
      </h1>

      <ul className="flex list-reset">
        <li>
          <Link to="/" className="text-white ml-6 no-underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white ml-6 no-underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white ml-6 no-underline">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
