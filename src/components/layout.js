import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="bg-footer-700">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">

        <div className="social-media">
          <ul>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Email</li>
          </ul>
        </div>

        <div className="attribution">Created using the <a href="https://github.com/taylorbryant/gatsby-starter-tailwind" target="_blank">gatsby-starter-tailwind</a> Gatsby theme</div>

        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
