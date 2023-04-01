import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
class Vignesh extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="pagefor">
          <Link to="/">
            <img
              className="imagefor"
              src="https://www.thelist.com/img/gallery/signs-you-should-not-say-i-love-you/intro-1611601999.jpg"
              alt="I Love You"
            />
          </Link>
        </div>
      </div>
    )
  }
}

export { Vignesh }
export default Vignesh
