import { ComponentRegistry } from "@typing/interfaces/react/react.interface";
import { Header1 } from "@components/atoms/MDX/Headers/Headers/Header1.Atom";
import { Header2 } from "@components/atoms/MDX/Headers/Headers/Header2.Atom";
import { Header3 } from "@components/atoms/MDX/Headers/Headers/Header3.Atom";
import { Header4 } from "@components/atoms/MDX/Headers/Headers/Header4.Atom";

export const getAnchorSlug = (text: string | any[]): string => {
  let slug: string;
  if (typeof text === "string") {
    slug = text;
  } else if (Array.isArray(text)) {
    slug = text
      .map((segment) => {
        if (typeof segment === "string") return segment;
        if (segment.props.children && typeof segment.props.children === "string") return segment.props.children;
        return "";
      })
      .join(" ");
  } else {
    slug = "";
  }
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-");
};

export const HeaderRegistry: ComponentRegistry = {
  Header1,
  Header2,
  Header3,
  Header4,
};
