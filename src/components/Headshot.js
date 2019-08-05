import React, { Component } from 'react';
import Img from "gatsby-image";
import './headshot.scss';

class Headshot extends Component {
    render() {
        // const  headshotImageURL = this.props.headshot.file.url;
        const { fluid } = this.props.headshotImage;
        return (
            <React.Fragment>
                <section id="Headshot">
                    <div className="Headshot-Wrapper mx-auto">
                        <Img
                            className="Headshot-Image"
                            alt="Spencer Marx"
                            fluid={fluid}/>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Headshot;