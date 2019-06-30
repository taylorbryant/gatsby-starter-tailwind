const _ = require('lodash');

exports.onCreateNode = ({ node, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
    let slug;
    if (node.internal.type === 'MarkdownRemark') {
        if (
          Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
          Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
        ) {
            slug = `/${_.kebabCase(node.frontmatter.slug)}`;
        }
        if (
          Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
          Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
        ) {
            slug = `/${_.kebabCase(node.frontmatter.title)}`;
        }
        createNodeField({ node, name: 'slug', value: slug });
    }
};

// graphql function returns a promise so we can use this little promise helper to have a nice result/error state
const wrapper = promise =>
  promise
    .then(result => ({ result, error: null }))
    .catch(error => ({ error, result: null }));

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const postPage = require.resolve('./src/templates/post.js');

    const { error, result } = await wrapper(
      graphql(`
      {
        posts: allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
               frontmatter {
                tags
              }
            }
          }
        }
      }
    `)
    );

    if (!error) {
        let posts = result.data.posts.edges;

        posts.forEach(edge => {
            createPage({
                path: edge.node.fields.slug,
                component: postPage,
                context: {
                    slug: edge.node.fields.slug,
                },
            });
        });

        // Tag pages:
        let tags = [];
        // Iterate through each post, putting all found tags into `tags`
        posts.forEach(edge => {
            if (_.get(edge, `node.frontmatter.tags`)) {
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        });

        // Eliminate duplicate tags
        tags = _.uniq(tags);

        const tagPage = require.resolve('./src/templates/tags.js');

        // Make tag pages
        tags.forEach(tag => {
            let tagPath =  `/${_.kebabCase(tag)}`;

            createPage({
                path: tagPath,
                component: tagPage,
                context: {
                    tag,
                },
            })
        });
    }
};