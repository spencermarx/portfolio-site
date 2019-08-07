import React, { Component } from 'react';
import './hamburger.scss';


class Hamburger extends Component {

    render() {
        const  isActive  = this.props.isActive;

        return (
            <React.Fragment>
                <div
                    className={`Hamburger Hamburger-Squeeze ${isActive}`}
                >
                    <span className="Hamburger-box">
                        <span className="Hamburger-inner"></span>
                    </span>
                </div>
            </React.Fragment>
        )
    }
}

export default Hamburger;