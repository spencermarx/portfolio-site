import React from "react";
import clsx from "clsx";
import { ReactBaseProps } from "@typing/interfaces/react/react.interface";
import "./image.scss";

interface Props extends ReactBaseProps {
  className: string;
  [key: string]: any;
}

const Image: React.FC<Props> = ({ className, ...props }: Props) => {
  let ImageComponent;
  if (className) {
    ImageComponent = <img className={clsx(className, "shadow")} {...props} />;
  } else {
    ImageComponent = (
      <div className="d-flex justify-content-center my-5">
        <img className={clsx("rounded-lg", "w-75", "shadow")} {...props} />
      </div>
    );
  }
  return ImageComponent;
};

export default Image;
