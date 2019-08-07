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
            height: 0,
        };

        this.handleClick = this.handleClick.bind(this);
        this.getScrollY = this.getScrollY.bind(this);
        this.navScrollCheck = this.navScrollCheck.bind(this);
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
        const navigation = document.querySelector('.Navbar');
        window.addEventListener('scroll', this.handleScroll, true);
        this.setState({ height: navigation.clientHeight });

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    // Get cross-browser scroll position for Y-axis
    getScrollY = () => {
        return window.scrollY || window.pageYOffset || document.body.scrollTop;
    }

    // Check page position for navbar
    navScrollCheck = () => {
        // Get navbar height
        const navHeight = this.state.height;
        // console.log('Nav Height:', navHeight);

        // Get document scroll location
        const scrollLocation = this.getScrollY();
        // console.log('Scroll Location:', scrollLocation);

        //  Additional scroll space
        const extraScrollSpace = 30;

        // Toggle class if scrolled below navbar height
        if (scrollLocation - extraScrollSpace > navHeight) {
            return true;
        }
        return false;
    }

    handleScroll = () => {
        const scrolled = this.navScrollCheck();
        // Toggle class if scrolled below navbar height
        if (scrolled) {
            this.setState({ isScrolled: true });
        } else {
            this.setState({ isScrolled: false });
        };
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