import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './skillcard.scss';


class SkillCard extends Component {
    render() {
        const title = this.props.title
        const image = this.props.imageURL
        const skillArray = this.props.skills
        return (
            <React.Fragment>
                <Card className="SkillCard">
                    <img className="SkillCard-Image" variant="top" src={image} alt="Icon" />
                    <Card.Body className="text-center">
                        <Card.Title className="SkillCard-Title">{title}</Card.Title>
                        <ul className="SkillCard-Skills">
                            {skillArray.map(skill =>
                                <p className="mb-2 text-muted">{skill}</p>
                            )}
                        </ul>
                    </Card.Body>
                </Card>
            </React.Fragment>
        )
    }
}

export default SkillCard;