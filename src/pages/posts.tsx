import React from "react";
import Posts from "@components/templates/Posts/Posts.Template";
import { graphql } from "gatsby";

export const query = graphql`
  {
    allContentfulBlogCollection(filter: { active: { eq: true } }) {
      edges {
        node {
          label
          frontmatter {
            title
            keywords
            metaDescription
            description
          }
          thumbnail {
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid
              src
            }
          }
          availableBlogs {
            title
            slug
            shortDescription {
              shortDescription
            }
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
                  readEstimate
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface Props {
  data: Record<string, any>;
}

const PostsPage: React.FC<Props> = ({ data }) => {
  return <Posts data={data} />;
};

export default PostsPage;
