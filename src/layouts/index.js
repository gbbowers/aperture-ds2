import React from 'react'
import Link from 'gatsby-link'
import '../scss/base.scss'


class Template extends React.Component {
  render() {
    const { location, children, data } = this.props
    let header
    if (location.pathname === '/') {
      header = (
        <div className="Header">
          <Link to={'/'} className="Logo" >
            Home
          </Link>
          <div className="System-Title">Aperture <span>Design System</span></div>
        </div>
      )
    } else {
      header = (
        <div className="Header">
          <Link to={'/'} className="Logo" >
            Home
          </Link>
          <div className="System-Title">Aperture <span>Design System</span></div>
        </div>
      )
    }
    return (
      <div className="Page">
        {header}
        <div className="Sidebar">
          <ul className="Sidenav">
          {data.allMarkdownRemark.edges.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const category = node.frontmatter.category
              return (
                <li key={node.fields.slug}>
                    <Link to={node.fields.slug}>
                      {node.frontmatter.title}
                    </Link><br />
                  <small>{category}</small>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="Main">
          {children()}
        </div>
        <div className="Footer">Footer</div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
  data: React.PropTypes.object,
}

export default Template

export const pageQuery = graphql`
  query ListQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___category], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMM, YYYY")
            title
            category
            catorder
          }
        }
      }
    }
  }
`