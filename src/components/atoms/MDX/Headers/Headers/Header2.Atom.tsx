import React from "react";
import { ReactBaseProps } from "@typing/interfaces/react/react.interface";
import { GenericHeader } from "@components/atoms/MDX/Headers/Headers/GenericHeader.Atom";
interface Props extends ReactBaseProps {
  HeaderType: string;
}

export const BaseHeader2: React.FC<Props> = ({ children, ...options }: ReactBaseProps) => (
  <h2 className="mb-2 mt-5" {...options}>
    {children}
  </h2>
);

export const Header2: React.FC<ReactBaseProps> = ({ children }: ReactBaseProps) => (
  <GenericHeader HeaderType="h2">{children}</GenericHeader>
);
