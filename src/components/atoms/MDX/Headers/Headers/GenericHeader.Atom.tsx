import React, { useState } from "react";
import { ComponentRegistry, ReactBaseProps } from "@typing/interfaces/react/react.interface";
import AnchorLink from "@components/atoms/MDX/Headers/Anchor/AnchorLink.Atom";
import { getAnchorSlug } from "@components/atoms/MDX/Headers/helpers/headers.helper";
import { BaseHeader1 } from "@components/atoms/MDX/Headers/Headers/Header1.Atom";
import { BaseHeader2 } from "@components/atoms/MDX/Headers/Headers/Header2.Atom";
import { BaseHeader3 } from "@components/atoms/MDX/Headers/Headers/Header3.Atom";

interface Props extends ReactBaseProps {
  HeaderType: string;
}

const BaseHeadersRegistry: ComponentRegistry = {
  h1: BaseHeader1,
  h2: BaseHeader2,
  h3: BaseHeader3,
  h4: BaseHeader3,
};

export const GenericHeader: React.FC<Props> = ({ HeaderType, children }: Props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const anchor = getAnchorSlug(children as string);
  const link = `#${anchor}`;
  const Header = BaseHeadersRegistry[HeaderType];
  return (
    <Header id={anchor} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <AnchorLink link={link} isHovering={isHovering} />
      {children}
    </Header>
  );
};
