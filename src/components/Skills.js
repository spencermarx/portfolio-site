import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SkillCard from './SkillCard';
import { Row, Col } from 'react-bootstrap';

const Skills = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulSkillSet(sort: { fields: pageOrder, order: ASC }) {
            edges {
            node {
                title
                image {
                    file {
                        url
                        }
                }
                skills
                pageOrder
            }
            }
        }
        }
    `);

    const skillCards = data.allContentfulSkillSet.edges;

    return (
        <React.Fragment>
            <section id="Skills">
                <Row>
                    {skillCards.map(edge =>
                        <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center">
                            <SkillCard
                                title={edge.node.title}
                                image={edge.node.image}
                                skills={edge.node.skills} />
                        </Col>
                    )}
                </Row>
            </section>
        </React.Fragment>
    )
}


export default Skills;