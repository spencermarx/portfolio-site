import React from "react";
import { ReactBaseProps } from "@typing/interfaces/react/react.interface";
import "./dropcap.scss";

type Props = ReactBaseProps;

const DropCap: React.FC<Props> = ({ children }: Props) => {
  const [dropCap, ...paragraph] = children as string;
  return (
    <p>
      <span className="DropCap">{dropCap}</span>
      {paragraph}
    </p>
  );
};

export default DropCap;
