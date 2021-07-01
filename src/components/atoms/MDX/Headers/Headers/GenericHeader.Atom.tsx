import React, { useState } from "react";
import { ReactBaseProps } from "@typing/interfaces/react/react.interface";
import AnchorLink from "@components/atoms/MDX/Headers/Anchor/AnchorLink.Atom";
import { getAnchorSlug, BaseHeadersRegistry } from "@components/atoms/MDX/Headers/helpers/headers.helper";

interface Props extends ReactBaseProps {
  HeaderType: string;
}

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
