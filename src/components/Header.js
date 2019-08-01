import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import SiteMetaData from './SiteMetadata'
import './header.scss';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <SiteMetaData/>
                <Navbar bg="transparent" expand="lg">
                    <Container>
                        <Link to="/">
                            <Navbar.Brand href="/" className="Logo">
                                Spencer Marx
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Link to="/about"><Nav.Link>About</Nav.Link></Link>
                                <Link to="/contact"><Nav.Link>Contact</Nav.Link></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;