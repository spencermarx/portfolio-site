import React, { Component } from 'react';
import ImageCarouselItem from './ImageCarouselItem';
import './imagecarousel.scss';

class ImageCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeImage: 0,
            totalImages: this.props.projectMedia.length,
            lastClicked: null,
        }

        this.handleForwardClick = this.handleForwardClick.bind(this);
        this.handleBackwardClick = this.handleBackwardClick.bind(this);
        this.handleControlsClick = this.handleControlsClick.bind(this);
    }

    handleForwardClick() {
        const currentImage = this.state.activeImage;
        console.log(currentImage);

        if (currentImage < this.state.totalImages - 1) {
            this.setState({ activeImage: currentImage + 1 });
            console.log("Forward");
        } else {
            this.setState({ activeImage: 0 });
            console.log("Back to beginning");
        }
    }
    handleBackwardClick() {
        const currentImage = this.state.activeImage;

        if (currentImage > 0) {
            this.setState({ activeImage: currentImage - 1 });
        } else {
            this.setState({ activeImage: this.state.totalImages - 1 });
        }
    }

    handleControlsClick(clickData){
        if(clickData === 'back'){
            this.handleBackwardClick();
        } else if (clickData === 'forward'){
            this.handleForwardClick();
        } else {
            console.log("Error")
        }

    }

    render() {
        const images = this.props.projectMedia;
        const { themeColor } = this.props;

        const style = {
            color: {
                color: themeColor,
            }
        }

        // console.log(images);

        return (
            <div className="ImageCarousel">
                {images.map((image, i) => {
                    if (i === this.state.activeImage) {
                        return (
                            <ImageCarouselItem
                            style={style}
                            image={image}
                            key={i}
                            active={true}
                            activeImage={this.state.activeImage}
                            totalImages={this.state.totalImages}
                            handleControlsClick={this.handleControlsClick}/>
                        )
                    } else {
                        return (
                            <ImageCarouselItem
                            style={style}
                            image={image}
                            key={i}
                            active={false}
                            activeImage={this.state.activeImage}
                            totalImages={this.state.totalImages} />
                        )
                    }
                })}
            </div>
        )
    }
}

export default ImageCarousel;