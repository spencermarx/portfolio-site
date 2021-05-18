import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";

const BlogPage = () => {
  return (
    <>
      <Layout>
        <Container>Blog</Container>
      </Layout>
    </>
  );
};

export default BlogPage;
