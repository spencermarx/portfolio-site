import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './errorform.scss'


class ErrorForm extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="ErrorForm">
                    <h3 className="ErrorForm-Message text-center">Something Went Wrong!</h3>
                    <p className="ErrorForm-SubMessage text-center">Try submitting the form again or contact us by&nbsp;
                     <a className="ErrorForm-Link" href="mailto:hello@yourrestaurant.online?subject=Hi%20there!">email</a>
                    </p>
                    <svg class="ErrorForm-Errormark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle class="ErrorForm-Errormark-Circle" cx="26" cy="26" r="25" fill="none"></circle>
                        <path class="ErrorForm-Errormark-X" fill="none" d="M16 16 36 36 M36 16 16 36"></path>
                    </svg>
                    <Button
                        variant="outline-warning"
                        className="ErrorForm-Button"
                        onClick={this.props.handleReset}>
                        Try Again
                    </Button>
                </div>
            </React.Fragment>
        )
    }
}


export default ErrorForm;