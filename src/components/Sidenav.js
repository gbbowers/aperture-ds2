import React from "react";
import Link from "gatsby-link";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

    }

    // Somewhere between https://reactjs.org/docs/handling-events.html and https://codepen.io/gbbowers/pen/xJNKVw

    render() {
    return (
    <nav>
        <ul className="Sidenav">
            <li><Link to="/">Getting Started</Link></li>
            <li className="SectionTitle"><button>Guidelines</button></li>
            <li className="sectionGuidelines collapsable" id="guidelines"><ul>
            {this.props.navData
                .filter(post => post.node.frontmatter.category == 'guidelines')
                .map(({ node: post }) => {
                const title = post.frontmatter.title || post.fields.slug
                const category = post.frontmatter.category
                return (
                    <li key={post.fields.slug}>
                        <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                        </Link>
                    </li>
                )
                })
            }
            </ul></li>
            <li className="SectionTitle"><button>Structure</button></li>
            <li className="sectionStructure collapsable open"><ul>
            {this.props.navData
                .filter(post => post.node.frontmatter.category == 'structure')
                .map(({ node: post }) => {
                const title = post.frontmatter.title || post.fields.slug
                const category = post.frontmatter.category
                return (
                    <li key={post.fields.slug}>
                        <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                        </Link>
                    </li>
                )
                })
            }
            </ul></li>
            <li className="SectionTitle"><button>Components</button></li>
            <li className="sectionComponents collapsable open"><ul>
            {this.props.navData
                .filter(post => post.node.frontmatter.category == 'components')
                .map(({ node: post }) => {
                const title = post.frontmatter.title || post.fields.slug
                const category = post.frontmatter.category
                return (
                    <li key={post.fields.slug}>
                        <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                        </Link>
                    </li>
                )
                })
            }
            </ul></li>

            <li className="SectionTitle"><button>Design Tokens</button></li>
            <li className="sectionTokens collapsable open"><ul>
            {this.props.navData
                .filter(post => post.node.frontmatter.category == 'tokens')
                .map(({ node: post }) => {
                const title = post.frontmatter.title || post.fields.slug
                const category = post.frontmatter.category
                return (
                    <li key={post.fields.slug}>
                        <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                        </Link>
                    </li>
                )
                })
            }
            </ul></li>
        </ul>
    </nav>
)}
};

export default Sidebar;