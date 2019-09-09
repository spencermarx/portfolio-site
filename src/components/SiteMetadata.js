import React from "react"
import { Helmet } from "react-helmet"

class SiteMetadata extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Spencer Marx | Full Stack Developer</title>
          <meta name="description" content="Spencer Marx is a full stack developer specialized in JavaScript living in Boston, Massachusetts. He is currently considering new work opportunities."/>
          <meta name="og:title" property="og:title" content="Spencer Marx | Full Stack Developer"/>
        </Helmet>
      </div>
    )
  }
}

export default SiteMetadata;