import React from 'react'
import loadable from '@loadable/component'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '../pages/Header'
import { Footer } from '../pages/Footer'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Vignesh } from '../pages/Vignesh'
// const Home = loadable(() => import('../pages/Home'))

class RoutesClass extends React.Component {
  render() {
    return (
      <div className="app-block">
        <>
          <Header />
          <div>
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/notfound" element={<NotFound />} />
              <Route exact path="/vignesh" element={<Vignesh />} />
              <Route exact path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </>
      </div>
    )
  }
}

export default RoutesClass
export { RoutesClass }
