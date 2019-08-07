import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './skillcard.scss';


class SkillCard extends Component {
    render() {
        const title = this.props.title;
        const imageURL = this.props.image.file.url;
        const skillArray = this.props.skills;
        const key = title;
        return (
            <React.Fragment>
                <Card className="SkillCard" key={key}>
                    <img
                        className="SkillCard-Image"
                        variant="top"
                        src={imageURL}
                        alt="Icon" />
                    <Card.Body className="text-center">
                        <Card.Title className="SkillCard-Title">{title}</Card.Title>
                        <ul className="SkillCard-Skills">
                            {skillArray.map((skill) =>
                                <p className="mb-2 text-muted" key={skill}>{skill}</p>
                            )}
                        </ul>
                    </Card.Body>
                </Card>
            </React.Fragment>
        )
    }
}

export default SkillCard;