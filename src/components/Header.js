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
            isActive: '',
            isScrolled: '',
            prevScrollStatus: false
        };
    }

    //   Handle Toggler Click
    handleClick = () => {
        console.log("handleClick:", this.state.isActive)
        if(this.state.isActive === ''){
            this.setState({isActive: 'Is-Active'});
        } else {
            this.setState({isActive: ''});
        }
    }

    // Adds an event listener when the component is mounted
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmounted
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    //  Show the navbar on scroll
    handleScroll = () => {
        let currentScrollStatus = (window.scrollY > 100);
        if (this.state.prevScrollStatus !== currentScrollStatus) {
            this.setState({prevScrollStatus: currentScrollStatus});
            if(currentScrollStatus){
                this.setState({ isScrolled: 'Is-Scrolled' });
            } else {
                this.setState({ isScrolled: '' });
            }
        }
    };


    render() {
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);


        return (
            <React.Fragment>
                <SiteMetaData />
                <Navbar
                    className={`Navbar ${this.state.isActive} ${this.state.isScrolled}`}
                    expand="lg">
                    <Container>
                        <Link to="/" className="Header-Logo Logo particle-avoid">
                            Spencer Marx
                        </Link>
                        <Navbar.Toggle
                            className="Navbar-Toggle particle-avoid"
                            aria-controls="basic-navbar-nav"
                            onClick={this.handleClick}
                        >
                            <Hamburger isActive={this.state.isActive} />
                        </Navbar.Toggle>
                        <Navbar.Collapse
                            className="Navbar-Collapse"
                            id="basic-navbar-nav">
                            <Nav className="ml-auto my-4">
                                <Link to="/about" className="Header-Links particle-avoid">About</Link>
                                <Link to="/contact" className="Header-Links particle-avoid">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;