import React, { useContext } from 'react'

import Menu from '../components/molecules/Menu'
import ToggleDarkModeButton from "../components/atoms/ToggleDarkModeButton"


function Home() {
  return (
    <>
      <div className="main home">
        <ToggleDarkModeButton />
        <h1>Łukasz Strobejko</h1>
        <h2>Looking for a job as Front-End / Full-Stack Developer</h2>
        {/* <Menu /> */}
      </div>
    </>
  )
}

export default Home
