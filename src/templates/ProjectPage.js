import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'react-bootstrap';
import CustomButton from '../components/CustomButton'
import Layout from '../components/Layout';
import './projectpage.scss'

// fluid(maxWidth: 2000){
//     ...GatsbyContentfulFluid
//     }

export const query = graphql`
    query($slug: String!) {
  contentfulProject(slug: { eq: $slug }) {
    slug
    projectType
    projectTitle
    heroImage {
      file {
        url
      }
      fluid(maxWidth: 2000){
     ...GatsbyContentfulFluid
        }
    }
    startDate
    duration
    role
    technologyLabel
    technologies
    highlightsLabel
    highlights
    githubLink
    websiteLink
    longDescription {
      longDescription
    }
    themeColor
  }
}
`

const ProjectPage = (props) => {
    const data = props.data.contentfulProject
    const { projectTitle } = data;
    const { projectType } = data;
    const { themeColor } = data;
    const { startDate } = data;
    const { duration } = data;
    const { role } = data;
    const { technologyLabel } = data;
    const { technologies } = data;
    const { highlightsLabel } = data;
    const { highlights } = data;
    const { longDescription } = data.longDescription;
    const { githubLink } = data;
    const { websiteLink } = data;
    const heroImage = data.heroImage.fluid;

    const pageStyle = {
        headerText: {
            color: themeColor
        },
        firstLetter: {
            color: themeColor,
            initialLetter: '3 2',
            margin: '0 .3rem 0 0',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            lineHeight: '1rem',
        }
    }

    const techCol1 = technologies.slice(0, 3);
    const techCol2 = technologies.slice(3, 6);

    return (
        <React.Fragment>
            <Layout>
                <Img className="Project-Hero" fluid={heroImage} alt="Project hero" />
                <h5 className="Project-Type text-center" style={pageStyle.headerText}>{projectType}</h5>
                <h1 className="Project-Title text-center" style={pageStyle.headerText}>{projectTitle}</h1>
                <div className="Project-Container">
                    <Row className="Project-Data justify-content-center">
                        <Col xs={12} md={5} className="Project-Data-Column">
                            <h6 className="Project-Info font-weight-bold" style={pageStyle.headerText}>Project Info</h6>
                            <ul>
                                <li className="Project-Info-Start-Date">
                                    <strong>Start Date:</strong>&nbsp;{startDate}
                                </li>
                                <li className="Project-Info-Duration">
                                    <strong>Duration:</strong>&nbsp;{duration}
                                </li>
                                <li className="Project-Info-Duration">
                                    <strong>Role:</strong>&nbsp;{role}
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} md={5} className="Project-Data-Column">
                            <h6 className="Project-Tech font-weight-bold" style={pageStyle.headerText}>{technologyLabel}</h6>
                            <Row>
                                <Col xs={12} md={6}>
                                    <ul>
                                        {techCol1.map((tech) =>
                                            <li className="Project-Tech-Title" key={tech}>{tech}</li>)
                                        }
                                    </ul>
                                </Col>
                                <Col xs={12} md={6}>
                                    <ul>
                                        {techCol2.map((tech) =>
                                            <li className="Project-Tech-Title" key={tech}>{tech}</li>)
                                        }
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <div className="Project-Highlights">
                            <h6 className="Project-Highlights-Title font-weight-bold text-center" style={pageStyle.headerText}>{highlightsLabel}</h6>
                            <ul>
                                {highlights.map((highlight, i) =>
                                    <li className="Project-Highlights-Highlight" key={i}>{highlight}</li>)
                                }
                            </ul>
                        </div>
                    </Row>
                    <div>
                        <p className="Project-Description">
                            <span style={pageStyle.firstLetter}>{longDescription.slice(0, 1)}</span>{longDescription.slice(1, longDescription.length)}
                        </p>
                    </div>
                    {websiteLink.length > 0 ? (
                        <div className="Project-Buttons">
                            <Row>
                                <Col xs={6} className="d-flex justify-content-center justify-content-md-end">
                                    <CustomButton
                                        classNameProp="ProjectCard-Button text-center"
                                        link={githubLink}
                                        target="_blank"
                                        color={themeColor}
                                        themeColor={themeColor}
                                        border="2px solid"
                                        borderColor={themeColor}
                                        fill="none"
                                    >View Source</CustomButton>
                                </Col>
                                <Col xs={6} className="d-flex justify-content-center justify-content-md-start">
                                    <CustomButton
                                        classNameProp="ProjectCard-Button text-center"
                                        link={websiteLink}
                                        target="_blank"
                                        color={themeColor}
                                        themeColor={themeColor}
                                        border="2px solid"
                                        borderColor={themeColor}
                                        fill="none"
                                    >Visit Website</CustomButton>
                                </Col>
                            </Row>
                        </div>
                    ) : (
                            null
                    )}
                    <div>
                        <h6 className="Project-Images font-weight-bold" style={pageStyle.headerText}>Deliverables</h6>
                        <div>Image Carousel</div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default ProjectPage;
