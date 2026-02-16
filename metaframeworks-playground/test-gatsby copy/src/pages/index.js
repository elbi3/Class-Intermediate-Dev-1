import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  const projects = data.allMarkdownRemark.nodes

  return (
    <main>
      <h1>Portfolio</h1>
      <ul>
        {projects.map(project => (
          <li key={project.frontmatter.slug}>
            <Link to={`/projects/${project.frontmatter.slug}`}>
              {project.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

