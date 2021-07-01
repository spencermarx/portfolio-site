import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "@reach/router";
import clsx from "clsx";
import { toast } from "react-toastify";
import "./anchorlink.scss";

interface Props {
  link: string;
  isHovering: boolean;
}

const CONSTANTS = {
  MESSAGES: {
    COPY: {
      SUCCESS: "Link copied to your clipboard!",
    },
  },
};

const AnchorLink: React.FC<Props> = ({ link, isHovering }: Props) => {
  const location = useLocation();
  const copyLink = () => {
    const [baseUrl] = location.href.split("#");
    navigator.clipboard.writeText(`${baseUrl}${link}`);
    toast.success(CONSTANTS.MESSAGES.COPY.SUCCESS, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  return (
    <i onClick={copyLink} className={clsx("AnchorLink", "text-medium-gray", { isHovering })}>
      <FontAwesomeIcon icon={faLink} style={{ width: "0.5em", height: "0.5em" }} />
    </i>
  );
};

export default AnchorLink;
