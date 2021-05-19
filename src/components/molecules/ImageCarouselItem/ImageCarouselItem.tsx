import React from "react";
import Img from "gatsby-image";
import { Row, Col } from "react-bootstrap";
import Indicators from "@components/molecules/IndicatorBubbles/IndicatorBubbles";
import { ClickType } from "@components/organisms/ImageCarousel/ImageCarousel";
import "./imagecarouselitem.scss";

interface Props {
  active: boolean;
  activeImage: number;
  totalImages: number;
  image: any;
  style: Record<string, any>;
  handleControlsClick: (str: ClickType) => void;
}

const ImageCarouselItem: React.FC<Props> = ({
  image,
  activeImage,
  active,
  totalImages,
  style,
  handleControlsClick,
}: Props) => {
  const {
    color: { color: themeColor },
  } = style;

  const styles = {
    active: {
      display: "flex",
    },
    inactive: {
      display: "none",
    },
    color: {
      color: themeColor,
    },
    button: {
      borderColor: themeColor,
      color: themeColor,
    },
  };

  let imageStyle = {};

  if (active) {
    imageStyle = styles.active;
  } else {
    imageStyle = styles.inactive;
  }
  return (
    <Row className="ImageCarousel-Item" style={imageStyle}>
      <Col xs={12} md={6} className="ImageCarousel-Item-Info order-1 order-md-0">
        <div className="d-flex align-items-between align-items-md-center h-100">
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
              onClick={() => handleControlsClick("back")}
            >
              {`<`}
            </button>
            <Indicators number={totalImages} activeIndicator={activeImage} themeColor={themeColor} />
            <button
              className="ImageCarousel-Item-Button ImageCarousel-Item-Button-Forward"
              style={styles.button}
              onClick={() => handleControlsClick("forward")}
            >
              {`>`}
            </button>
          </div>
        </div>
      </Col>
      <Col xs={12} md={6} className="ImageCarousel-Item-Image order-0 order-md-1">
        <div className="ImageCarousel-Image-Wrapper">
          <Img className="ImageCarousel-Image" fluid={image.fluid} alt="Project Thumbnail" />
        </div>
      </Col>
    </Row>
  );
};

export default ImageCarouselItem;
