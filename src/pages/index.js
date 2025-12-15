import * as React from "react"
import sampleImage from "../../static/images/sample-image.svg"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const imageStyles = {
  maxWidth: 400,
  borderRadius: 8,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        🚀 Welcome to My Gatsby Site!
      </h1>
      <p style={paragraphStyles}>
        This is a simple Gatsby project with an index page and some assets.
      </p>
      <img 
        src={sampleImage} 
        alt="Sample" 
        style={imageStyles}
      />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home | Gatsby Deploy Test</title>
