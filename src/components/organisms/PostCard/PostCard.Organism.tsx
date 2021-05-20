import React from "react";
import { Card } from "react-bootstrap";
import Img from "gatsby-image";
import { Link } from "gatsby";
import _get from "lodash.get";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import "./postcard.scss";

interface Props {
  title: string;
  slug: string;
  thumbnail: Record<string, any>;
  body: Record<string, any>;
}

const PostCard: React.FC<Props> = ({ title, slug, thumbnail, body }: Props) => {
  const readEstimate = _get(body, "childMdx.frontmatter.readEstimate", null);

  return (
    <Link to={`/posts/${slug}`}>
      <Card className="PostCard">
        <div className="PostCardThumbnail">
          <Img className="PostCardThumbnail-Image" fluid={thumbnail.fluid} alt="Project Thumbnail" />
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
