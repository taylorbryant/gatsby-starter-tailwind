import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function ArticlesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Articles"
      />

    <div>
        <h1>My articles</h1>
     </div>
      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
            <p>Here is some text...</p>
        </div>
      </section>
    </Layout>
  );
}

export default ArticlesPage;
