import React, { Component } from 'react';
import Typed from 'typed.js';
import './TypedTitles.scss';

class TypedTitles extends Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
        // your desired props to this destructuring assignment.
        const titles = [
            'Full Stack Developer',
            'Vue Enthusiast',
            'React Aficionado',
            'UX Designer',
            'Systems Architect',
            'GIS Specialist',
            'Startup Builder',
        ];

        // You can pass other options here, such as typing speed, back speed, etc.
        const options = {
            strings: titles,
            smartBackspace: true,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
    }

    render() {
        return (
            <span
                className="TypedTitles"
                ref={(el) => { this.el = el; }}
            />

        );
    }
}

export default TypedTitles;