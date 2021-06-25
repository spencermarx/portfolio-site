import React from "react";
import { ReactBaseProps } from "@typing/interfaces/react/react.interface";
import Tag from "@components/atoms/Tag/Tag.Atom";
import clsx from "clsx";

interface Props extends ReactBaseProps {
  tags: string[];
  className?: string;
}

const TagsList: React.FC<Props> = ({ tags, className }: Props) => {
  return (
    <ul className={clsx("list-unstyled", className)}>
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </ul>
  );
};

export default TagsList;
