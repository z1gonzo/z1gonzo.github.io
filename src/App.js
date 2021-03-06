import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './App.css'
import Theme from "./Theme";
import { ThemeStore } from "./contexts/ThemeStore";

import Home from './components/pages/HomePage'
import Works from './components/pages/WorksPage'
import About from './components/pages/AboutPage'
import Contact from './components/pages/ContactPage'


function App() {
  return (
    <ThemeStore>
    <Theme>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </Theme>
    </ThemeStore>
  )
}

export default App
