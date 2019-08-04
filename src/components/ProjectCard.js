import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ProjectThumbnail from './ProjectThumbnail';
import CustomButton from './CustomButton';
import ReactCardFlip from 'react-card-flip';
import './projectcard.scss';


class ProjectCard extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.onHover = this.onHover.bind(this);
    }

    onHover(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        const { projectType } = this.props;
        const { projectTitle } = this.props;
        const { imageThumbnail } = this.props;
        const { technologies } = this.props;
        const { shortDescription } = this.props;
        const { githubLink } = this.props;
        const { websiteLink } = this.props;
        const { themeColor } = this.props;
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <Card className="ProjectCard" key="front" onMouseEnter={this.onHover}>
                    <ProjectThumbnail imageThumbnail={imageThumbnail} />
                    <Card.Body className="text-center">
                        <Card.Title className="ProjectCard-Title">{projectType}</Card.Title>
                        <Card.Subtitle className="ProjectCard-Title">{projectTitle}</Card.Subtitle>
                    </Card.Body>
                </Card>
                <Card className="ProjectCard" key="back" onMouseLeave={this.onHover}>
                    <Card.Body className="ProjectCard-Tech">
                        <h4 className="ProjectCard-Tech text-center" style={{color: themeColor}}>Tech</h4>
                        <Row>
                            {technologies.map(tech =>
                                <Col xs={5} className="ProjectCard-Tech-Wrapper" style={{background: themeColor, color:'#FFF'}}>
                                    <p className="ProjectCard-Tech-Name text-center">{tech}</p>
                                </Col>
                            )}
                        </Row>
                    <p className="ProjectCard-Short-Desription text-center mt-3 mb-4">{shortDescription}</p>
                    <Row>
                        <Col xs={6} className="d-flex justify-content-center">
                            <CustomButton
                            classNameProp="ProjectCard-Button text-center"
                            link={githubLink}
                            target="_blank"
                            color={themeColor}
                            themeColor={themeColor}
                            border= "2px solid"
                            borderColor={themeColor}
                            fill="none"
                            >Source Code</CustomButton>
                        </Col>
                        <Col xs={6} className="d-flex justify-content-center">
                            <CustomButton
                            classNameProp="ProjectCard-Button text-center"
                            link={websiteLink}
                            target="_blank"
                            color={themeColor}
                            themeColor={themeColor}
                            border= "2px solid"
                            borderColor={themeColor}
                            fill="none"
                            >Visit Site</CustomButton>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </ReactCardFlip>
        )
    }
}

export default ProjectCard;