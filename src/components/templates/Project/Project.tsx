import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Row, Col } from "react-bootstrap";
import Layout from "@components/Layout";
import SocialIcon from "@components/molecules/SocialIcon/SocialIcon";
import ImageCarousel from "@components/organisms/ImageCarousel/ImageCarousel";
import "./project.scss";

export const query = graphql`
  query ($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      projectType
      projectTitle
      heroBackdrop {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid
        }
      }
      heroImage {
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid
        }
      }
      startDate
      duration
      role
      technologyLabel
      technologies
      highlightsLabel
      highlights {
        highlights
      }
      githubLink
      websiteLink
      longDescription {
        longDescription
      }
      projectMedia {
        title
        description
        fluid(maxWidth: 1500) {
          ...GatsbyContentfulFluid
        }
      }
      themeColor
    }
  }
`;

interface ContentfulProject {
  projectTitle: string;
  projectType: string;
  themeColor: string;
  startDate: Date;
  duration: string;
  role: string;
  technologyLabel: string;
  technologies: string[];
  highlightsLabel: string;
  highlights: {
    highlights: string;
  };
  longDescription: {
    longDescription: string;
  };
  githubLink: string;
  websiteLink: string;
  projectMedia: any[];
  heroImage: {
    fluid: any;
  };
  heroBackdrop: {
    fluid: any;
  };
}

interface Props {
  data: { contentfulProject: ContentfulProject };
}

const Project: React.FC<Props> = ({ data: { contentfulProject } }: Props) => {
  const {
    projectTitle,
    projectType,
    themeColor,
    startDate,
    duration,
    role,
    technologyLabel,
    technologies,
    highlightsLabel,
    highlights: { highlights },
    longDescription: { longDescription },
    githubLink,
    websiteLink,
    projectMedia,
    heroImage: { fluid: heroImage },
    heroBackdrop: { fluid: heroBackdrop },
  } = contentfulProject;

  const pageStyle: Record<string, any> = {
    headerText: {
      color: themeColor,
    },
    firstLetter: {
      color: themeColor,
      initialLetter: "3 2",
      margin: "0 .3rem 0 0",
      fontSize: "2.5rem",
      fontWeight: "bold",
      lineHeight: "1rem",
    },
  };
  const totalTechCount = technologies.length;
  const techCol1 = technologies.slice(0, totalTechCount / 2);
  const techCol2 = technologies.slice(totalTechCount / 2, totalTechCount);

  // Process Highlights String
  const highlightsFinalArray: string[] = [];
  const highlightsSplit = highlights.split("\n");
  highlightsSplit.forEach((item: string) => {
    if (item && item.length > 0) {
      highlightsFinalArray.push(item.slice(2));
    }
  });

  // Date Format Conversion
  const convertedDate = new Date(startDate);
  const convertedDateString: string = convertedDate.toDateString().split(" ").slice(1).join(" ");
  return (
    <>
      <Layout>
        <div className="Project-Hero-Container">
          <Img className="Project-Hero-Backdrop" fluid={heroBackdrop} alt="Project hero backdrop" />
          <Img className="Project-Hero" fluid={heroImage} alt="Project hero" />
        </div>
        <h5 className="Project-Type text-center" style={pageStyle.headerText}>
          {projectType}
        </h5>
        <h1 className="Project-Title text-center" style={pageStyle.headerText}>
          {projectTitle}
        </h1>
        {githubLink && githubLink.length > 1 && websiteLink && websiteLink.length > 0 ? (
          <div className="Project-Buttons">
            <Row>
              <Col xs={6} className="Project-Button-Wrapper d-flex justify-content-end">
                <SocialIcon icon="github-special" color={themeColor} link={githubLink} />
              </Col>
              <Col xs={6} className="Project-Button-Wrapper d-flex justify-content-start">
                <SocialIcon icon="externalSite" color={themeColor} link={websiteLink} />
              </Col>
            </Row>
          </div>
        ) : null}
        {(!githubLink || githubLink.length < 1) && websiteLink && websiteLink.length > 0 ? (
          <div className="Project-Buttons">
            <Row>
              <Col xs={12} className="Project-Button-Wrapper d-flex justify-content-center">
                <SocialIcon icon="externalSite" color={themeColor} link={websiteLink} />
              </Col>
            </Row>
          </div>
        ) : null}
        <div className="Project-Container">
          <Row className="Project-Data justify-content-center">
            <Col xs={12} md={5} className="Project-Data-Column">
              <h6 className="Project-Info font-weight-bold" style={pageStyle.headerText}>
                Project Info
              </h6>
              <ul>
                <li className="Project-Info-Start-Date">
                  <strong>Start Date:</strong>&nbsp;{convertedDateString}
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
              <h6 className="Project-Tech font-weight-bold" style={pageStyle.headerText}>
                {technologyLabel}
              </h6>
              <Row>
                <Col xs={12} md={6}>
                  <ul>
                    {techCol1.map((tech: string) => (
                      <li className="Project-Tech-Title" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col xs={12} md={6}>
                  <ul>
                    {techCol2.map((tech: string) => (
                      <li className="Project-Tech-Title" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="Project-Highlights-Row">
            <div className="Project-Highlights">
              <h6 className="Project-Highlights-Title font-weight-bold text-center" style={pageStyle.headerText}>
                {highlightsLabel}
              </h6>
              <ul>
                {highlightsFinalArray.map((item, i) => (
                  <li className="Project-Highlights-Highlight" key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Row>
          <div className="Project-Description-Wrapper">
            <p className="Project-Description">
              <span style={pageStyle.firstLetter}>{longDescription.slice(0, 1)}</span>
              {longDescription.slice(1, longDescription.length)}
            </p>
          </div>
          <div>
            <h6 className="Project-Images font-weight-bold text-center" style={pageStyle.headerText}>
              Deliverables
            </h6>
            <ImageCarousel projectMedia={projectMedia} themeColor={themeColor} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Project;
