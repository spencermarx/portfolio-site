import React, { Component } from 'react';
import Img from "gatsby-image";
import { Row, Col } from 'react-bootstrap';
import Indicators from './Indicators';
import './imagecarouselitem.scss';

class ImageCarouselItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active
        };
        this.handleClickBack = this.handleClickBack.bind(this);
        this.handleClickForward = this.handleClickForward.bind(this);
    }

    componentDidMount() {

    }

    handleClickBack(){
        this.props.handleControlsClick('back');
    }

    handleClickForward(){
        this.props.handleControlsClick('forward');
    }

    render() {
        const { image } = this.props;
        const { active } = this.props;
        const {activeImage} = this.props;
        const {totalImages} = this.props;
        const themeColor = this.props.style.color.color;


        const styles = {
            active: {
                display: 'flex',
            },
            inactive: {
                display: 'none'
            },
            color: {
                color: themeColor,
            },
            button: {
                borderColor: themeColor,
                color: themeColor,
            }
        }

        let imageStyle = {}

        if (active) {
            imageStyle = styles.active
        } else {
            imageStyle = styles.inactive
        }



        return (
            <Row className='ImageCarousel-Item' style={imageStyle}>
                <Col xs={12} md={6} className='ImageCarousel-Item-Info order-1 order-md-0'>
                    <div className="d-flex align-items-between align-items-lg-center h-100">
                        <div className="ImageCarousel-Image-Metadata">
                            <h6 className="ImageCarousel-Image-Metadata-Title">{image.title}</h6>
                            <p className="ImageCarousel-Image-Metadata-Description">{image.description}</p>
                        </div>
                    </div>
                    <div className="ImageCarousel-Item-Controls">
                        <div className="ImageCarousel-Item-Buttons">
                            <button
                                className="ImageCarousel-Item-Button ImageCarousel-Item-Button-Back"
                                style={styles.button}
                                onClick={this.handleClickBack}>
                                {`<`}
                            </button>
                            <Indicators
                            number={totalImages}
                            activeIndicator={activeImage}
                            themeColor={themeColor}/>
                            <button
                                className="ImageCarousel-Item-Button ImageCarousel-Item-Button-Forward"
                                style={styles.button}
                                onClick={this.handleClickForward}>
                                {`>`}
                            </button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} className="ImageCarousel-Item-Image order-0 order-md-1">
                    <div className="ImageCarousel-Image-Wrapper">
                        <Img
                            className="ImageCarousel-Image"
                            fluid={image.fluid}
                            alt="Project Thumbnail" />
                    </div>
                </Col>
            </Row>
        )
    }
}

export default ImageCarouselItem;