import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ArticlesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Articles"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
            <h1>Articles</h1>
            <p class="description">Some of my recent articles.</p>
        </div>
      </section>
    </Layout>
  );
}

export default ArticlesPage;
