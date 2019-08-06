import React, { Component } from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { Container } from 'react-bootstrap';

class ContactPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <Container>
                    <h1 className="text-center mt-4">Contact Me</h1>
                        <p className="text-center">Have a question or want to work together?</p>
                        <ContactForm />
                    </Container>
                </Layout>
            </React.Fragment>
        )
    }
}

export default ContactPage;