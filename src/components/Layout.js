import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import './layout.scss';
class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="Layout-MainContent">
                    {this.props.children}
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;