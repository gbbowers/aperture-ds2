import React from "react";
import Link from "gatsby-link";

const Sidebar = props => (
    <nav>
        <ul className="Sidenav">
            <li className="SectionTitle">Guidelines</li>
            {props.navData
                .filter(post => post.node.frontmatter.category == 'guidelines')
                .map(({ node: post }) => {
                const title = post.frontmatter.title || post.fields.slug
                const category = post.frontmatter.category
                return (
                    <li key={post.fields.slug}>
                        <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                        </Link> <small>({category})</small>
                    </li>
                )
                })
            }
            <li className="SectionTitle">Structure</li>
            {props.navData
                .filter(post => post.node.frontmatter.category == 'structure')
                .map(({ node: post }) => {
                const title = post.frontmatter.title || post.fields.slug
                const category = post.frontmatter.category
                return (
                    <li key={post.fields.slug}>
                        <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                        </Link> <small>({category})</small>
                    </li>
                )
                })
            }
        </ul>
    </nav>
)

export default Sidebar;