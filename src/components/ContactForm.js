import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Loading from './Loading';
import CompletedForm from './CompletedForm';
import ErrorForm from './ErrorForm';
// import axios from 'axios';
import './contactform.scss';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            complete: false,
            reset: false,
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    //   Handle Changes
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    //   Handle Submition -> Trigger AJAX
    handleSubmit(event) {
        const { firstName, lastName, email, message } = this.state;
        const formObject = {
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'message': message,
        };
        console.log(formObject);

        this.sendFormWithFetch(formObject);

        event.preventDefault();
    }

    handleReset(event) {
        this.setState({ error: false });
    }

    render() {
        const { firstName, lastName, email, message } = this.state;
        return (
            <React.Fragment>
                <section className="ContactForm">
                    <div className="ContactForm-Wrapper">
                        <Form
                            className="ContactForm-Form"
                            method="POST"
                            name="inquiryForm"
                            netlify-honeypot="bot-field"
                            data-netlify="true"
                            onSubmit={this.handleSubmit}>
                            <input type="hidden" name="bot-field" />
                            {this.state.loading ? (
                                <Loading />
                            ) : this.state.complete ? (
                                <CompletedForm />
                            ) : this.state.error ? (
                                <ErrorForm handleReset={this.handleReset} />
                            ) : (
                                            <div>
                                                <Row>
                                                    <Col xs={12} md={6}>
                                                        <Form.Control
                                                            id="ContactForm-FirstName"
                                                            className="ContactForm-Form-Input"
                                                            name="firstName"
                                                            placeholder="First name *"
                                                            value={firstName}
                                                            onChange={this.handleChange}
                                                            required
                                                        />
                                                    </Col>
                                                    <Col xs={12} md={6}>
                                                        <Form.Control
                                                            id="ContactForm-LastName"
                                                            className="ContactForm-Form-Input"
                                                            name="lastName"
                                                            placeholder="Last name *"
                                                            value={lastName}
                                                            onChange={this.handleChange}
                                                            required />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Control
                                                            id="ContactForm-Email"
                                                            className="ContactForm-Form-Input"
                                                            name="email"
                                                            type="email"
                                                            placeholder="Enter email *"
                                                            value={email}
                                                            onChange={this.handleChange}
                                                            required />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Control
                                                            id="ContactForm-Message"
                                                            className="ContactForm-Form-Input"
                                                            name="message"
                                                            as="textarea"
                                                            rows="3"
                                                            placeholder="How can I help you?"
                                                            value={message}
                                                            onChange={this.handleChange} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="d-flex justify-content-center">
                                                        <Button
                                                            variant="dark"
                                                            className="ContactForm-Button"
                                                            type="submit"
                                                            value="Submit">
                                                            Send Message
                            </Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        )}
                        </Form>
                    </div>
                </section>
            </React.Fragment>
        )
    }

    sendFormWithFetch(formObject) {
        this.setState({ loading: true })
        fetch("/contact/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({"form-name": "contact", ...formObject})
          })
            .then((result) => {
                console.log("Success!");
                console.log(result);

                setTimeout(function () {
                    this.setState({
                        loading: false,
                        complete: true,
                    })
                }
                    .bind(this),
                    2000)
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    loading: false,
                    complete: false,
                    error: true,
                })
            });
    }
}


export default ContactForm;