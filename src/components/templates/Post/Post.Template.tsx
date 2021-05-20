import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import Layout from "@components/Layout";
import CodeBlock from "@components/organisms/CodeBlock/CodeBlock.organism";
import "./post.scss";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      thumbnail {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid
          src
        }
      }
      body {
        childMdx {
          body
          frontmatter {
            title
            author
            date
          }
        }
      }
    }
  }
`;

interface Props {
  data: Record<string, any>;
}

const components = {
  pre: CodeBlock,
};

const getSEO = (frontmatter: Record<string, any>, thumbnail: Record<string, any>) => (
  <Helmet
    title={frontmatter.title}
    titleTemplate={`Marx Dev | %s`}
    meta={[
      {
        name: `description`,
        content: frontmatter.metaDescription,
      },
      {
        name: `keywords`,
        content: frontmatter.keywords,
      },
      {
        property: `og:title`,
        content: frontmatter.title,
      },
      {
        property: `og:description`,
        content: frontmatter.metaDescription,
      },
      {
        property: `og:type`,
        content: `article`,
      },
      {
        property: `og:image`,
        content: `https:${thumbnail.fluid.src}`,
      },
    ]}
  />
);

const Post: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const {
    contentfulBlogPost: {
      thumbnail,
      body: {
        childMdx: { body, frontmatter },
      },
    },
  } = data;
  return (
    <Layout>
      <Container className="post">
        <MDXProvider components={components}>
          {getSEO(frontmatter, thumbnail)}
          <h1 className="post-title text-center pt-4 pb-3">{frontmatter.title}</h1>
          <article className="mdx pb-4">
            <MDXRenderer scope>{body}</MDXRenderer>
          </article>
        </MDXProvider>
      </Container>
    </Layout>
  );
};

export default Post;
