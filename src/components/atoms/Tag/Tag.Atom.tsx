import React from "react";
import { ReactBaseProps } from "@typing/interfaces/react/react.interface";

interface Props extends ReactBaseProps {
  tag: string;
}

const Tag: React.FC<Props> = ({ tag }: Props) => {
  return <li className="d-inline small rounded-lg bg-medium-gray px-3 mx-2 text-white">{tag}</li>;
};

export default Tag;
