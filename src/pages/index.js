import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <div className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block mx-auto w-1/2"
          src={catAndHumanIllustration}
        />

        <h2 className="bg-yellow inline-block my-8 p-3">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{" "}
          <a
            className="font-bold no-underline text-grey-darkest"
            href="https://tailwindcss.com/"
          >
            Tailwind
          </a>
          , a utility-first CSS framework.
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
