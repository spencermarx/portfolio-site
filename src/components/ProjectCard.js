import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ProjectThumbnail from './ProjectThumbnail';
import CustomButton from './CustomButton';
import CardFlip from './CardFlip';
import './projectcard.scss';


class ProjectCard extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            isHovered: false,
            front: true,
            back: false,
        };
        this.onHover = this.onHover.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onHover(e) {
        e.preventDefault();
        console.log("Is hovering")
        this.setState(prevState => ({ isHovered: !prevState.isHovered }));
        this.setState(prevState => ({ front: !prevState.front }));
        this.setState(prevState => ({ back: !prevState.back }));
        console.log("Hover State:", this.state.isHovered)
    }

    onClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        const { projectType } = this.props;
        const { projectTitle } = this.props;
        const { fluid } = this.props.imageThumbnail;
        const { technologyLabel } = this.props;
        const { technologies } = this.props;
        const { shortDescription } = this.props;
        const { githubLink } = this.props;
        const { websiteLink } = this.props;
        const { themeColor } = this.props;
        const key = projectTitle;

        let isHovered;

        if (this.state.isHovered) {
            isHovered = 'Is-Hovered';
        } else {
            isHovered = '';
        }
        return (
            <CardFlip
                isFlipped={this.state.isFlipped}
                flipDirection="horizontal"
                key={key}
                onMouseEnter={this.onHover}
                onMouseLeave={this.onHover}
                addClassName={isHovered}>
                <Card
                    className={`ProjectCard`}
                    key="front"
                    onClick={this.onClick} >
                    <ProjectThumbnail fluid={fluid} />
                    <Card.Body className="text-center">
                        <Card.Title className="ProjectCard-Type">{projectType}</Card.Title>
                        <Card.Subtitle className="ProjectCard-Title">{projectTitle}</Card.Subtitle>
                    </Card.Body>
                </Card>
                <Card
                    className={`ProjectCard`}
                    key="back"
                    onClick={this.onClick} >
                    <Card.Body>
                        <h4 className="ProjectCard-Tech text-center" style={{ color: themeColor }}>{technologyLabel}</h4>
                        <Row>
                            {technologies.map((tech, i) =>
                                <Col xs={5} className="ProjectCard-Tech-Wrapper" style={{ background: themeColor, color: '#FFF' }} key={tech}>
                                    <p className="ProjectCard-Tech-Name text-center" key={tech}>{tech}</p>
                                </Col>
                            )}
                        </Row>
                        <p className="ProjectCard-Short-Description text-center mt-3 mb-4">{shortDescription}</p>
                        {technologyLabel === 'Technology' ? (
                            <Row>
                                <Col xs={6} className="d-flex justify-content-center">
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
                                <Col xs={6} className="d-flex justify-content-center">
                                    <CustomButton
                                        classNameProp="ProjectCard-Button text-center"
                                        link={websiteLink}
                                        target="_blank"
                                        color={themeColor}
                                        themeColor={themeColor}
                                        border="2px solid"
                                        borderColor={themeColor}
                                        fill="none"
                                    >View Project</CustomButton>
                                </Col>
                            </Row>
                        ) : (
                                <Row>
                                    <Col xs={12} className="d-flex justify-content-center">
                                        <CustomButton
                                            classNameProp="ProjectCard-Button text-center"
                                            link={websiteLink}
                                            target="_blank"
                                            color={themeColor}
                                            themeColor={themeColor}
                                            border="2px solid"
                                            borderColor={themeColor}
                                            fill="none"
                                        >View Project</CustomButton>
                                    </Col>
                                </Row>
                            )}
                    </Card.Body>
                </Card>
            </CardFlip>
        )
    }
}

export default ProjectCard;