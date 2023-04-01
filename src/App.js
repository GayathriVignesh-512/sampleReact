import React from 'react'
import './styles.scss'
// import "./styles.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RoutesClass } from './Routes/index'

const App = () => {
  return (
    <Router>
      <RoutesClass />
    </Router>
  )
}

export default App
