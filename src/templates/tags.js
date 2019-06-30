import React from "react";
import Layout from "../components/layout";
import { graphql} from "gatsby";
import Tags from "../components/tags";
import Card from "../components/card";

class TagRoute extends React.Component {
  render() {
    let postsByTags = [];
    let data = this.props.data;
    console.log(this.props);

    data.posts.edges.forEach(({ node }) => {
      if (node.frontmatter.tags) {
        node.frontmatter.tags.forEach(tag => {
          if (!postsByTags[tag]) {
            postsByTags[tag] = [];
          }
          postsByTags[tag].push(node);
        });
      }
    });
    let tag = this.props.pageContext.tag;
    let tags = Array.from(Object.keys(postsByTags));

    return (
      <Layout>
        <div className="container flex flex-wrap overflow-hidden">
          <div className="w-full md:w-1/4">
            <Tags taglist={tags} active={tag}/>
          </div>
          <div className="w-full md:w-3/4">
            <div className="container flex flex-wrap">
              {data.allMarkdownRemark.edges.map(post => (
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
}

export default TagRoute;

export const tagPageQuery = graphql`
    query TagPage($tag: String) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
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
                }
            }
        },
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