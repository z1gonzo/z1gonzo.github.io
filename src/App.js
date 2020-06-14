import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import Home from './components/pages/HomePage'
import Works from './components/pages/WorksPage'
import About from './components/pages/AboutPage'
import Contact from './components/pages/ContactPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        {/* <Redirect to='/404' /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
