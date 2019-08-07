import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class CustomButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    toggleHover = () => {
        this.setState({ hover: !this.state.hover })
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
            finalStyle = { ...defaultButtonStyle , ...hoverStyle, };
            // console.log(finalStyle)
        } else {
            finalStyle = defaultButtonStyle;
        }

        return (
            <React.Fragment>
                <Button
                    className={classNameProp}
                    variant="outline-primary"
                    href={link}
                    target={target}
                    style={finalStyle}
                    onMouseEnter={this.toggleHover}
                    onMouseLeave={this.toggleHover}
                >
                    {this.props.children}
                </Button>
            </React.Fragment>
        )
    }
}

export default CustomButton;