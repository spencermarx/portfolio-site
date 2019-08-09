import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Row, Button } from 'react-bootstrap';
import './contactme.scss'

class ContactMe extends Component {

    render() {
        return (
            <React.Fragment>
                <section id="ContactMe" className="my-5">
                    <h1 className="ContactMe-Header text-center">Got a question?</h1>
                    <p className="ContactMe-Text text-center">Don’t be shy! I’d love to help in any way that I can!</p>
                    <Row>
                        <Link to="/contact" className="mx-auto"><Button variant="dark" className="ContactMe-Button">Say Hi!</Button></Link>
                    </Row>
                </section>
            </React.Fragment>
        )
    }
}


export default ContactMe;