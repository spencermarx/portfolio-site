import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import Hamburger from './Hamburger';
import SiteMetaData from './SiteMetadata'
import './header.scss';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isScrolled: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    //   Handle Toggler Click
    handleClick(event) {
        this.setState(state => ({
            isActive: !state.isActive
        }));
    }

    // Scrolling State Change
    componentDidMount() {
        // Select Scroll
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = e => {
        if (window.scrollY >= 80) {
            this.setState({ isScrolled: true })

        } else {
            this.setState({ isScrolled: false })
        }
    }

    render() {
        let isActive;
        let isScrolled;
        if (this.state.isActive) {
            isActive = 'Is-Active';
        } else {
            isActive = '';
        }
        if (this.state.isScrolled) {
            isScrolled = 'Is-Scrolled';
        } else {
            isScrolled = '';
        }
        return (
            <React.Fragment>
                <SiteMetaData />
                <Navbar
                    className={`Navbar ${isActive} ${isScrolled}`}
                    expand="lg">
                    <Container>
                        <Link to="/" className="Header-Logo">
                            Spencer Marx
                        </Link>
                        <Navbar.Toggle
                            className="Navbar-Toggle"
                            aria-controls="basic-navbar-nav"
                            onClick={this.handleClick}
                        >
                            <Hamburger isActive={isActive} />
                        </Navbar.Toggle>
                        <Navbar.Collapse
                            className="Navbar-Collapse"
                            id="basic-navbar-nav">
                            <Nav className="ml-auto my-4">
                                <Link to="/about" className="Header-Links">About</Link>
                                <Link to="/contact" className="Header-Links">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;