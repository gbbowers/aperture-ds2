import React from "react";
import Link from "gatsby-link";

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        //this.addActiveClass = this.addActiveClass.bind(this)
        // this.state = {
        //    active: false,
        // }

        // toggleClass() {
        //     const currentState = this.state.active
        //     this.setState({
        //         active: !currentState
        //     })
        // }
    }

    // Somewhere between https://reactjs.org/docs/handling-events.html and https://codepen.io/gbbowers/pen/xJNKVw

    render() {
    return (
    <nav>
        <ul className="Sidenav">
            <li><Link to="/">Getting Started</Link></li>
            <li className="open" id="guidelines">
                <button className="SectionTitle">Guidelines</button>
                <ul>
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
                </ul>
            </li>
            <li className="open">
                <button className="SectionTitle">Structure</button>
                <ul>
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
                </ul>
            </li>
            <li className="open">
                <button className="SectionTitle">Components</button>
                <ul>
                    <li><button className="SectionTitle">Actions</button></li>
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
                </ul>
            </li>
            <li className="open">
                <button className="SectionTitle">Design Tokens</button>
                <ul>
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
                </ul>
            </li>
        </ul>
    </nav>
)}
};

export default Sidebar;