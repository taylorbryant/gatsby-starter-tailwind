import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import email from "../images/email.png";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main className="flex flex-col flex-1 max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="bg-footer-700">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">

        <div className="social-media">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/tomwaterton/" target="_blank">
                <img alt="LinkedIn" src={linkedin} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tomwaterton" target="_blank">
                <img alt="Twitter" src={twitter} />
              </a>
            </li>
            <li>
              <a href="mailto:tomwaterton@gmail.com" target="_blank">
                <img alt="Email" src={email} />
              </a>
            </li>
          </ul>
        </div>

        <div className="attribution">Created using the <a href="https://github.com/taylorbryant/gatsby-starter-tailwind" target="_blank">tailwind</a> Gatsby starter theme</div>

        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
