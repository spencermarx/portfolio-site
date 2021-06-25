import React from "react";
import { Helmet } from "react-helmet";

class SiteMetadata extends React.Component {
  render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spencer Marx | Full Stack Developer</title>
        <meta
          name="description"
          content="Spencer Marx is a full stack developer specialized in JavaScript living in Boston, Massachusetts."
        />
        <meta name="og:title" property="og:title" content="Spencer Marx | Full Stack Developer" />
      </Helmet>
    );
  }
}

export default SiteMetadata;
