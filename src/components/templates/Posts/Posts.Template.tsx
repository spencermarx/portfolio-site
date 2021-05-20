import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "@components/Layout";
import PostCard from "@components/organisms/PostCard/PostCard.Organism";
import _get from "lodash.get";
import "./posts.scss";

const getSEO = (frontmatter: Record<string, any>, thumbnail: Record<string, any>) => (
  <Helmet
    title={frontmatter.title}
    titleTemplate={`Marx Dev | %s`}
    meta={[
      {
        property: `og:title`,
        content: frontmatter.title,
      },
      {
        name: `description`,
        content: frontmatter.description,
      },
      {
        property: `og:description`,
        content: frontmatter.metaDescription,
      },
      {
        name: `keywords`,
        content: frontmatter.keywords,
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

interface Props {
  data: Record<string, any>;
}

const getJustification = (index: number) => {
  const isLeftColumn = index % 2 === 0;
  return isLeftColumn ? "justify-content-md-end" : "justify-content-md-start";
};

const Posts: React.FC<Props> = ({ data }: Props) => {
  const postsData = _get(data, "allContentfulBlogCollection.edges[]0.node");
  const { label, frontmatter, thumbnail, availableBlogs } = postsData;

  return (
    <Layout>
      {getSEO(frontmatter, thumbnail)}
      <Container className="py-4">
        <h1 className="text-center">{label}</h1>
        <section className="Posts py-3">
          <Row>
            {availableBlogs.map((post: any, index: number) => (
              <Col
                xs={12}
                md={6}
                className={`d-flex justify-content-center ${getJustification(index)} my-4`}
                key={post.title}
              >
                <PostCard {...post} />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </Layout>
  );
};

export default Posts;
