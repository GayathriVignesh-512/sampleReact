import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-block border-top border-dark">
        Footer!{' '}
        <div>
          <Link to="/notfound">Click here to view --{'>'} NotFound Page</Link>
        </div>
      </div>
    )
  }
}

export default Footer
