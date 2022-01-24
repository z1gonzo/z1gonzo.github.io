import React, { useContext } from 'react'
import styled, { css } from "styled-components";
import { Link } from 'react-router-dom'
import { ThemeContext } from "../../contexts/ThemeStore";

const Container = styled.div`
  text: ${(props) => props.theme.text};
`;

function Menu() {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <Container>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/works">Works</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </Container>
  )
}

export default Menu
