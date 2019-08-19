import React, { Component } from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { Container } from 'react-bootstrap';

class ContactPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formState: 'active'
        }

        this.getFormState = this.getFormState.bind(this);
    }

    getFormState(formState) {
        this.setState({ formState: formState })
    }

    render() {
        return (
            <React.Fragment>
                <Layout>
                    <Container>
                        {this.state.formState === 'active' ? (
                            <React.Fragment>
                                <h1 className="text-center mt-4">Contact Me</h1>
                                <p className="text-center">Have a question or want to work together?</p>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                            <h1 className="text-center mt-4" style={{opacity:'0'}}>Contact Me</h1>
                            <p className="text-center" style={{opacity:'0'}}>Have a question or want to work together?</p>
                        </React.Fragment>
                            )}
                        <ContactForm getFormState={this.getFormState} />
                    </Container>
                </Layout>
            </React.Fragment>
        )
    }
}

export default ContactPage;