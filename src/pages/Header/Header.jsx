import React from 'react'
import './styles.scss'
import { header_details } from './fixture.js'
import Nav from 'react-bootstrap/Nav'

class Header extends React.Component {
  render() {
    return (
      <div className="header border-bottom border-dark">
        <div className="name mb-1">{header_details.Name}</div>
        <div className="header-details">
          <span className="line-right">{header_details.Country}</span>
          <Nav.Link
            href={`mailto: ${header_details.Mobile_Number}`}
            className="line-right p-0">
            {header_details.Mobile_Number}
          </Nav.Link>
          <Nav.Link
            href={`mailto: ${header_details.Mail_ID}`}
            className="line-right p-0">
            {header_details.Mail_ID}
          </Nav.Link>
          <Nav.Link
            target="_blank"
            href={header_details.LinkedIn}
            className="p-0">
            {Object.keys(header_details)[4]}
          </Nav.Link>
        </div>
      </div>
    )
  }
}

export default Header
