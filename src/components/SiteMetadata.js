import React from "react"
import { Helmet } from "react-helmet"

class SiteMetadata extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Spencer Marx | Dev</title>
        </Helmet>
      </div>
    )
  }
}

export default SiteMetadata;