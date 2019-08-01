import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="Hero">
                    <div className="my-5 text-left">
                        <h1>Hi, my name is Spencer.<br />I'm a Full Stack Developer living in Boston, MA.</h1>
                        <p>Background in UX Design and Geographic Information Science. Currently considering new work opportunities building innovative digital experiences</p>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Hero;