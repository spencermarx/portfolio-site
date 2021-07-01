import React from "react";
import { ReactBaseProps } from "@typing/interfaces/react/react.interface";
import { GenericHeader } from "@components/atoms/MDX/Headers/Headers/GenericHeader.Atom";
interface Props extends ReactBaseProps {
  HeaderType: string;
}

export const BaseHeader4: React.FC<Props> = ({ children, ...options }: ReactBaseProps) => (
  <h4 className="mb-2 mt-4" {...options}>
    {children}
  </h4>
);

export const Header4: React.FC<ReactBaseProps> = ({ children }: ReactBaseProps) => (
  <GenericHeader HeaderType="h4">{children}</GenericHeader>
);
