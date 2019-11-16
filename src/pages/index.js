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

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block mx-auto w-1/2"
          src={catAndHumanIllustration}
        />

        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Hi, I'm Tom.
        </h2>

        <p>I'm a content designer and tea-drinker.</p>

      </section>
    </Layout>
  );
}

export default IndexPage;
