import React, { Component } from 'react';
import './projectthumbnail.scss';

class ProjectThumbnail extends Component{
    render(){
        const { imageThumbnail } = this.props;
        return(
            <div className="ProjectThumbnail">
                <img className="ProjectThumbnail-Image" src={imageThumbnail} alt="Project Thumbnail"/>
            </div>
        )
    }
}

export default ProjectThumbnail;