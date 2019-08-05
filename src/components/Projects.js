import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ProjectCard from './ProjectCard';
import { Row, Col } from 'react-bootstrap';


const Projects = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulProject(sort: { fields: projectNumber, order: DESC }) {
            edges {
            node {
                projectType
                projectTitle
                imageThumbnail {
                    file {
                        url
                    }
                    fluid(maxWidth: 350){
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
                shortDescription{
                shortDescription
                }
            }
            }
        }
        }
    `);

    const projects = data.allContentfulProject.edges;

    // console.log(projects);

    return (
        <React.Fragment>
            <section id="Projects" className="my-5">
                <h1 className="text-center">Selected Projects</h1>
                <Row className="py-4">
                    {projects.map(edge =>
                        <Col xs={12} sm={6} className="d-flex justify-content-center my-4">
                            <ProjectCard
                                projectType={edge.node.projectType}
                                projectTitle={edge.node.projectTitle}
                                imageThumbnail={edge.node.imageThumbnail}
                                themeColor={edge.node.themeColor}
                                technologyLabel={edge.node.technologyLabel}
                                technologies={edge.node.technologies}
                                shortDescription={edge.node.shortDescription.shortDescription}
                                githubLink={edge.node.githubLink}
                                websiteLink={edge.node.websiteLink}
                            />
                        </Col>
                    )}
                </Row>
            </section>
        </React.Fragment>
    )
}


export default Projects;