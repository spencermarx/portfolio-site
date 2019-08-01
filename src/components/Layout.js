import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Layout extends Component{
    render(){
        return(
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default Layout;