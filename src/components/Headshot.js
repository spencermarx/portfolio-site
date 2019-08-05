import React, { Component } from 'react';
import './headshot.scss';

class Headshot extends Component {
    render(){
        const { headshotImage } = this.props;
        return (
            <React.Fragment>
                <section id="Headshot">
                    <div className="Headshot-Wrapper mx-auto">
                        <img className="Headshot-Image" src={headshotImage} alt="Spencer Marx" />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Headshot;