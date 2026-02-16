import React from "react"
import { graphql } from "gatsby"

export default function Project({ data }) {
  const project = data.markdownRemark

  return (
    <main>
      <h1>{project.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </main>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
