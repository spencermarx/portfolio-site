import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: projectNumber, order: DESC }) {
        edges {
          node {
            projectType
            showSource
            projectTitle
            imageThumbnail {
              file {
                url
              }
              fluid(maxWidth: 350) {
                ...GatsbyContentfulFluid
              }
            }
            technologyLabel
            technologies
            slug
            themeColor
            websiteLink
            githubLink
            projectNumber
            shortDescription {
              shortDescription
            }
          }
        }
      }
    }
  `);

  const projects = data.allContentfulProject.edges;

  // Dynamic Bootstrap Justification
  let itemIndex;
  const getJustification = itemIndex => {
    if (itemIndex % 2 === 0) {
      return 'justify-content-md-end';
    }
    return 'justify-content-md-start';
  };
  let justification;
  // console.log(projects);

  return (
    <>
      <section id="Projects" className="my-5">
        <h1 className="text-center">Selected Projects</h1>
        <Row className="py-4">
          {projects.map(edge => {
            // Get Justification
            itemIndex = projects.indexOf(edge);
            justification = getJustification(itemIndex);

            // Return final Project Card
            return (
              <Col
                xs={12}
                md={6}
                className={`d-flex justify-content-center ${justification} my-4`}
                key={edge.node.projectTitle}
              >
                <ProjectCard
                  projectType={edge.node.projectType}
                  showSource={edge.node.showSource}
                  projectTitle={edge.node.projectTitle}
                  imageThumbnail={edge.node.imageThumbnail}
                  themeColor={edge.node.themeColor}
                  technologyLabel={edge.node.technologyLabel}
                  technologies={edge.node.technologies}
                  shortDescription={edge.node.shortDescription.shortDescription}
                  githubLink={edge.node.githubLink}
                  slug={edge.node.slug}
                />
              </Col>
            );
          })}
        </Row>
      </section>
    </>
  );
};

export default Projects;
