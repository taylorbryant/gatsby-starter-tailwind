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

      <section>
        <div class="articles">
          <p class="article-title">
            <a href="https://medium.com/design-ibm/confessions-of-a-content-designer-9be86daca04">
              Confessions of a Content Designer
            </a>
          </p>
          <ul>
            <li>Published: <strong>Jun 18 2019</strong></li>
            <li>Length: <strong>10 min read</strong></li>
            <li>Tags: <strong>#content_desgin</strong></li>
          </ul>
        </div>
        </section>

<section>
<div>
On Content Design
	https://medium.com/design-ibm/on-content-design-d8f9830ff302
	Feb 11 2019
	3 min read
	#content_desgin

How to punctuate like a pro
	https://medium.com/@tomwaterton/how-to-punctuate-like-a-pro-f1cb66b87f53
	Oct 20 2018
	9 min read
	#writing

Taking responsibility for our communication
	https://medium.com/design-ibm/taking-responsibility-for-our-communication-b677100d61f5
	Jul 20 2018
	7 min read
	#communication #collaboration

Why I read
	https://medium.com/@tomwaterton/why-i-read-d044f8a01015	
	May 02 2018
	8 min read
	#learning #reading

Failing fast, using feedback loops, and the benefits of iterative design
	https://medium.com/design-ibm/failing-fast-using-feedback-loops-and-the-benefits-of-iterative-design-e0b86d037f50
	Feb 20 2018
	8 min read
	#design-thinking #lean-startup #prototyping #feedback-loop #fail-fast

How to emphasize key words in your text
	https://medium.com/@tomwaterton/how-to-emphasize-key-words-in-your-text-b8738f146972
	Sep 13 2017
	6 min read
	#writing 

Creating a culture of design
	https://medium.com/design-ibm/creating-a-culture-of-design-dfb9a36623b3
	Jun 08 2017
	9 min read
	#design #culture #design-thinking

What’s your passion?
	https://medium.com/@tomwaterton/whats-your-passion-c570374a8810
	Jul 18 2016
	4 min read	
	#story #communication

Tell me a story
	https://medium.com/@tomwaterton/tell-me-a-story-a809032e95d5
	Jul 03 2016
	4 min read
	#story #communication



        </div>
      </section>
    </Layout>
  );
}

export default ArticlesPage;
