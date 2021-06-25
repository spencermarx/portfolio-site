import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import { DateTime } from "luxon";
import Layout from "@components/Layout";
import TagsList from "@components/molecules/TagsList/TagsList.Molecule";
import DropCap from "@components/atoms/DropCap/DropCap.Atom";
import Img from "gatsby-image";
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
      tags
      body {
        childMdx {
          body
          frontmatter {
            title
            author
            date
            readEstimate
          }
        }
      }
    }
  }
`;

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
}

const components = {
  pre: CodeBlock,
  DropCap,
  Img,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      tags,
      body: {
        childMdx: { body, frontmatter },
      },
    },
  } = data;

  return (
    <Layout>
      <Container className="Post">
        <MDXProvider components={components}>
          {getSEO(frontmatter, thumbnail)}
          <div className="pt-4 pb-3 text-center ">
            {tags ? <TagsList tags={tags} /> : null}
            <h1 className="Post-Title">{frontmatter.title}</h1>
            <p className="Post-Date">
              {DateTime.fromISO(frontmatter.date).toLocaleString({ month: "long", day: "numeric", year: "numeric" })}
              <span className="mx-2">•</span>
              {frontmatter.readEstimate}
            </p>
          </div>
          <div className="Post-Hero mb-4">
            <Img className="Post-Thumbnail-Image" fluid={thumbnail.fluid} alt="Project hero" />
          </div>
          <article className="mdx pb-4">
            <MDXRenderer scope>{body}</MDXRenderer>
          </article>
        </MDXProvider>
      </Container>
    </Layout>
  );
};

export default Post;
