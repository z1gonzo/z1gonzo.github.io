import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Theme from "./Theme";
import { ThemeStore } from "./contexts/ThemeStore";

import Home from './views/Home'
import Works from './views/Works'
import About from './views/About'
import Contact from './views/Contact'

function App() {
  return (
    <ThemeStore>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/works" element={<Works />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            {/* <Redirect to="/404" /> */}
          </Routes>
        </BrowserRouter>
      </Theme>
    </ThemeStore>
  );
}

export default App;
