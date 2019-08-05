import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './contactform.scss'

class ContactForm extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="ContactForm">
                    <div className="ContactForm-Wrapper">
                        <Form className="ContactForm-Form" method="post" netlify-honeypot="bot-field" data-netlify="true">
                            <input type="hidden" name="bot-field" />
                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Control
                                        className="ContactForm-Form-Input"
                                        placeholder="First name *" />
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Control
                                        className="ContactForm-Form-Input"
                                        placeholder="Last name *" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        className="ContactForm-Form-Input"
                                        type="email"
                                        placeholder="Enter email *" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control
                                        className="ContactForm-Form-Input"
                                        as="textarea"
                                        rows="3"
                                        placeholder="How can I help you?" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                    <Button
                                    variant="dark"
                                    className="ContactForm-Button"
                                    type="submit">
                                        Send Message
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ContactForm;