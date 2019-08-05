import React, { Component } from 'react';
import Img from "gatsby-image";
import './projectthumbnail.scss';

class ProjectThumbnail extends Component{
    render(){
        const   {fluid}   = this.props;
        return(
            <div className="ProjectThumbnail">
                <Img
                className="ProjectThumbnail-Image"
                fluid={fluid}
                alt="Project Thumbnail"/>
            </div>
        )
    }
}

export default ProjectThumbnail;