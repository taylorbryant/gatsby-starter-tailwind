import React from "react";
import Layout from "../components/layout";
import { graphql} from "gatsby";
import Tags from "../components/tags";
import Card from "../components/card";

class Post extends React.Component {
  render() {
    let postNode = this.props.data.markdownRemark;
    let post = postNode.frontmatter;

    return (
      <Layout>
        <div className="container flex flex-wrap overflow-hidden">
          <div className="w-full ">
            <div className="mx-auto">
              <h1 className="text-2xl font-bold inline-block my-8 p-3">
                {post.title}
              </h1>
            </div>
            <div className="mb-8 px-3" dangerouslySetInnerHTML={{ __html: postNode.html }}/>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Post;

export const postQuery = graphql`
    query postBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                short_description
            }
        }
    }
`;