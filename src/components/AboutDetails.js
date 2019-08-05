import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './aboutdetails.scss';

class Headshot extends Component {
    render() {
        const { aboutDescription } = this.props;
        const { funFacts } = this.props;
        return (
            <React.Fragment>
                <section id="AboutDetails">
                    <Row>
                        <Col xs={12} lg={6}>
                            <div className="AboutDetails-FunFacts">
                                <h4 className="my-3">Fun Facts</h4>
                                <ul>
                                    {funFacts.map(fact =>
                                        <li>{fact}</li>
                                    )}
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="AboutDetails-Description">
                                <h4 className="my-3">My Story</h4>
                                <p>{aboutDescription}</p>
                            </div>
                        </Col>
                    </Row>

                </section>
            </React.Fragment>
        )
    }
}

export default Headshot;