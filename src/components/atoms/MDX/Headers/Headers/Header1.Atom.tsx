import React from "react";
import { ReactBaseProps } from "@typing/interfaces/react/react.interface";
import { GenericHeader } from "@components/atoms/MDX/Headers/Headers/GenericHeader.Atom";
interface Props extends ReactBaseProps {
  HeaderType: string;
}

export const BaseHeader1: React.FC<Props> = ({ children, ...options }: ReactBaseProps) => (
  <h1 {...options}>{children}</h1>
);

export const Header1: React.FC<ReactBaseProps> = ({ children }: ReactBaseProps) => (
  <GenericHeader HeaderType="h1">{children}</GenericHeader>
);
