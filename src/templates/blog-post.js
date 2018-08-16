import React from 'react'
import rehypeReact from 'rehype-react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

//Components that will be used in Documentation
import dummybutton from '../components/DummyButton'

// Add the components via rehype. Add everything you added above.
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "dummybutton": dummybutton }
}).Compiler



class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div className="entry">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <div className="entry-body">{renderAst(post.htmlAst)}</div>
        <div className="blog-post-meta">Updated: {post.frontmatter.date}, Category: {post.frontmatter.category}, Status: {post.frontmatter.status}</div>
        <dummybutton text="Feedback?" />

        <ul className="paging">
          {previous && (
            <li className="prev">
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li className="next">
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        category
        catorder
        status
      }
    }
  }
`
