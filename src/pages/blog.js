import React from "react";
import { graphql} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Tags from "../components/tags";
import Card from "../components/card";

function BlogPage({ data }) {

  let postsByTags = [];
  data.posts.edges.forEach(({node}) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTags[tag]) {
          postsByTags[tag] = [];
        }
        postsByTags[tag].push(node);
      });
    }
  });

  let tags = Array.from(Object.keys(postsByTags));

  return (
    <Layout>
      <SEO
        title="Blog"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="container flex flex-wrap overflow-hidden">
        <div className="w-full md:w-1/4">
          <Tags taglist={tags}/>
        </div>
        <div className="w-full md:w-3/4">
          <div className="container flex flex-wrap">
            { data.posts.edges.map(post => (
              <Card
                title={post.node.frontmatter.title}
                tags={post.node.frontmatter.tags}
                slug={post.node.fields.slug}
                short_description={post.node.frontmatter.short_description}
                key={post.node.fields.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogPage;

export const query = graphql`
  query {
    posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        tags
                        short_description
                    }
                    excerpt(pruneLength: 200)
                }
            }
        }
  }
`;