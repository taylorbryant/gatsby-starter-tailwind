import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="header-700">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">

      <div class="site-name">
        <a href="/">tomwaterton.com</a>
      </div>

      <div class="navbar">
        <a href="/content-design">Content design</a>
        <a href="/articles">Articles</a>
        <div class="dropdown">
          <button class="dropbtn">Tumbleweed
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="patents">Patents</a>
            <a href="cryptic-crosswords">Cryptic crosswords</a>
            <a href="brewing">Brewing</a>
            <a href="reading">Reading</a>
          </div>
        </div>
      </div>

      </div>
    </header>
  );
}

export default Header;
