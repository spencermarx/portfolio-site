const path = require("path");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

const getProjectPages = ({ graphql }) =>
  graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

const getBlogPages = ({ graphql }) =>
  graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

module.exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
      type Mdx implements Node {
        frontmatter: MdxFrontmatter
      }

      type MdxFrontmatter {
        items: [ItemValues]
        content: String @mdx
      }

      type ItemValues {
        value: String @mdx
      }
    `);
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectPageQuery = await getProjectPages({ graphql });
  const blogPostQuery = await getBlogPages({ graphql });

  // Create new pages

  // Project Pages
  projectPageQuery.data.allContentfulProject.edges.forEach((edge) => {
    createPage({
      component: path.resolve("./src/templates/ProjectPage.js"),
      path: `/project/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  // Blog Pages
  blogPostQuery.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: path.resolve("./src/components/templates/BlogPost/BlogPost.Template.tsx"),
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
