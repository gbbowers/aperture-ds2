import React from 'react'
import Link from 'gatsby-link'
import '../scss/base.scss'


class Template extends React.Component {
  render() {
    const { location, children } = this.props
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
        <div className="Sidebar">.</div>
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
}

export default Template
