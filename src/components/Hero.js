import React, { Component } from 'react';
import TypedTitles from './TypedTitles';
import './hero.scss';

class Hero extends Component {

    render() {
        return (
            <React.Fragment>
                <section id="Hero" className="Hero">
                    <div className="Hero-Text">
                        <h1 className="Hero-Text-Header" >Hi, I'm Spencer, I'm a<br />
                        <strong><TypedTitles/></strong><br/>
                         living in Boston.</h1>
                        <p className="Hero-Text-SubHeader">
                            Background in Software Development, UX Design, and GIS.
                            Currently building impactful digital experiences at&nbsp;
                            <a href="https://www.humancaresystems.com/" target="_blank" rel="noopener noreferrer">
                                Human Care Systems
                            </a>.</p>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Hero;