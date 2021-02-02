import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import SocialIcon from './SocialIcon';
import './footer.scss';


class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer className="Footer">
                    <Container>
                        <Row>
                            <Col xs={12} md={6} className="Footer-Logo Logo">
                                <Link to="/">Spencer Marx</Link>
                            </Col>
                            <Col className="col-12 col-md-6">
                                <div className="Footer-SocialIcons d-flex justify-content-center justify-content-md-end">
                                    <SocialIcon icon='email' color='black'/>
                                    <SocialIcon icon="github-default" color='black'/>
                                    <SocialIcon icon="linkedIn" color='black'/>
                                </div>
                            </Col>
                        </Row>
                        <Row className="Footer-Signature row mt-5">
                            <Col className="text-center">
                                <p className="my-0">© 2021 All Rights Reserved | Spencer Marx</p>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;