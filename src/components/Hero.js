import React, { Component } from 'react';
import './hero.scss';

class Hero extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="Hero" className="Hero">
                    <div className="Hero-Text">
                        <h1 className="Hero-Text-Header" >Hi, I'm Spencer.<br />
                        I'm a <strong>Full Stack Developer</strong><br/>
                         living in Boston.</h1>
                        <p className="Hero-Text-SubHeader">Background in UX Design and Geographic Information Science. Currently considering new work opportunities building impactful digital experiences.</p>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Hero;