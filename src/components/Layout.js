import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import './layout.scss'
class Layout extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                {this.props.children}
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;