import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
class NotFound extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="pagefor">
          {' '}
          The page you are looking is not available.
          <Link to="/">Go back to home page</Link> <h1>Page Not Found</h1>
          <Link to="/">
            <img
              className="imagefor"
              src="https://previews.123rf.com/images/remodesigner/remodesigner1906/remodesigner190601063/127855115-404-error-page-not-found-template-with-electric-plug-and-socket-design-for-web-page-disconnect-banne.jpg"
              alt="Page Not Found Image"
            />
          </Link>
        </div>
      </div>
    )
  }
}

export { NotFound }
export default NotFound
