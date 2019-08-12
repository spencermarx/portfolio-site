import React, { Component } from 'react';
import { Link } from 'gatsby';


class CustomButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }

        this.onHover = this.onHover.bind(this);
        // this.onClick = this.onClick.bind(this);
    }

    onHover(e) {
        e.preventDefault();
        this.setState({ hover: !this.state.hover })
    }

    onClick(link, target) {
        return (e => {
            console.log("Event:", e);
            console.log("Link:", link);
            console.log("Target:", target);
            e.preventDefault();
            e.stopPropagation();
            window.open(link, target)
        })
    }

    render() {

        const { classNameProp } = this.props;
        const { link } = this.props;
        const { target } = this.props;
        const { border } = this.props;
        const { borderColor } = this.props;
        const { fill } = this.props;
        const { themeColor } = this.props;
        const defaultButtonStyle = {
            color: themeColor,
            border: border,
            borderColor: borderColor,
            fill: fill,
            transition: '350ms ease-in',

        }
        let finalStyle = {};

        if (this.state.hover) {
            const hoverStyle = {
                backgroundColor: themeColor,
                color: '#FFF',
            }
            finalStyle = { ...defaultButtonStyle, ...hoverStyle, };
            // console.log(finalStyle)
        } else {
            finalStyle = defaultButtonStyle;
        }

        return (
            <React.Fragment>
                {target === '_blank' ? (
                    <button
                        className={`btn ${classNameProp}`}
                        to={link}
                        style={finalStyle}
                        onMouseEnter={this.onHover}
                        onMouseLeave={this.onHover}
                        onClick={this.onClick(link,target)}
                    >
                        {this.props.children}
                    </button>
                ) : (
                        <Link
                            className={`btn ${classNameProp}`}
                            to={link}
                            style={finalStyle}
                            onMouseEnter={this.onHover}
                            onMouseLeave={this.onHover}
                        >
                            {this.props.children}
                        </Link>
                    )}
            </React.Fragment>
        )
    }
}

export default CustomButton;