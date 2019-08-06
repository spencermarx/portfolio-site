import React, { Component } from 'react';
import './loading.scss'


class Loading extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Loading">
                    <h5 className="Loading-Message text-center">Sending Message</h5>
                    <p className="Loading-SubMessage text-center">Hang on! Your message is on its way!</p>
                    <div className="Loading-Balls">
                        <div className="Loading-Balls-Bounce1"></div>
                        <div className="Loading-Balls-Bounce2"></div>
                        <div className="Loading-Balls-Bounce3"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Loading;