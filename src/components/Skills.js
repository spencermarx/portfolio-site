import React, { Component } from 'react';
import SkillCard from './SkillCard';
import { Row, Col } from 'react-bootstrap';

class Skills extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="Skills">
                    <Row>
                        <Col xs={12} md={6} xl={4}>
                            <SkillCard/>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <SkillCard/>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <SkillCard/>
                        </Col>
                    </Row>
                </section>
            </React.Fragment>
        )
    }
}

export default Skills;