import React from "react";
import { Card } from "react-bootstrap";
import Img from "gatsby-image";
import { Link } from "gatsby";
import _get from "lodash.get";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import TagsList from "@components/molecules/TagsList/TagsList.Atom";
import "./postcard.scss";

export interface Props {
  title: string;
  slug: string;
  thumbnail: Record<string, any>;
  tags: string[];
  body: Record<string, any>;
}

const PostCard: React.FC<Props> = ({ title, slug, thumbnail, body, tags }: Props) => {
  const readEstimate = _get(body, "childMdx.frontmatter.readEstimate", null);

  return (
    <Link to={`/posts/${slug}`}>
      <Card className="PostCard relative">
        <div className="PostCard-Thumbnail position-relative">
          <Img className="PostCardThumbnail-Image" fluid={thumbnail.fluid} alt="Project Thumbnail" />
          {tags ? <TagsList className="PostCard-TagList" tags={tags} /> : null}
        </div>
        <Card.Body className="text-center">
          <Card.Title className="PostCard-Title font-weight-bold">{title}</Card.Title>
          <Card.Subtitle className="PostCard-Read-Estimate">
            <p className="d-inline-block mr-2">Read in {readEstimate}</p>
            <FontAwesomeIcon className="PostCard-Read-Estimate-Icon d-inline-block" icon={faLongArrowAltRight} />
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default PostCard;
