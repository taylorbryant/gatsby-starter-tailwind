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
        <Link className="flex items-center no-underline text-header" to="/">
          <span className="font-bold text-xl tracking-tight">
            {site.siteMetadata.title}
          </span>
        </Link>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/content-design`,
              title: `content design`
            },
            {
              route: `/articles`,
              title: `articles`
            },
            {
              route: `/tumbleweed`,
              title: `tumbleweed`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-header"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
