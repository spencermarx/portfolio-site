import React, { useState } from "react";
import ImageCarouselItem from "@components/molecules/ImageCarouselItem/ImageCarouselItem";
import "./imagecarousel.scss";

interface Props {
  projectMedia: any[];
  themeColor: string;
}

export type ClickType = "back" | "forward";

const ImageCarousel: React.FC<Props> = ({ projectMedia, themeColor }: Props) => {
  const [activeImage, setActiveImage] = useState(0);
  const totalImages = projectMedia.length;

  const style = {
    color: {
      color: themeColor,
    },
  };

  const handleBackwardClick = () => {
    const currentImage = activeImage;
    if (currentImage > 0) {
      setActiveImage(currentImage - 1);
    } else {
      setActiveImage(totalImages - 1);
    }
  };

  const handleForwardClick = () => {
    const currentImage = activeImage;

    if (currentImage < totalImages - 1) {
      setActiveImage(currentImage + 1);
    } else {
      setActiveImage(0);
    }
  };

  const handleControlsClick = (clickData: ClickType) => {
    if (clickData === "back") {
      handleBackwardClick();
    } else if (clickData === "forward") {
      handleForwardClick();
    }
  };

  return (
    <div className="ImageCarousel">
      {projectMedia.map((image, i) => {
        if (i === activeImage) {
          return (
            <ImageCarouselItem
              style={style}
              image={image}
              key={i}
              active={true}
              activeImage={activeImage}
              totalImages={totalImages}
              handleControlsClick={handleControlsClick}
            />
          );
        } else {
          return (
            <ImageCarouselItem
              style={style}
              image={image}
              key={i}
              active={false}
              activeImage={activeImage}
              totalImages={totalImages}
              handleControlsClick={handleControlsClick}
            />
          );
        }
      })}
    </div>
  );
};

export default ImageCarousel;
