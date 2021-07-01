import React from "react";
import { ReactBaseProps } from "@typing/interfaces/react/react.interface";
import { GenericHeader } from "@components/atoms/MDX/Headers/Headers/GenericHeader.Atom";
interface Props extends ReactBaseProps {
  HeaderType: string;
}

export const BaseHeader3: React.FC<Props> = ({ children, ...options }: ReactBaseProps) => (
  <h3 className="mb-2 mt-5" {...options}>
    {children}
  </h3>
);

export const Header3: React.FC<ReactBaseProps> = ({ children }: ReactBaseProps) => (
  <GenericHeader HeaderType="h3">{children}</GenericHeader>
);
