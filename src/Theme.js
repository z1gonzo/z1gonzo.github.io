import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./contexts/ThemeStore";

const themes = {
  dark: {
    background: "#181a1b",
    title: "#6495ed",
    text: "#fff",
  },
  light: {
    background: "#fff",
    title: "#ff6347",
    text: "#000",
  },
};

const GlobalStyleBody = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text}
  }
`;

const GlobalStyleLink = createGlobalStyle`
  a {
    color: ${(props) => props.theme.text}
  }
`;

const GlobalStyleLinkVisited = createGlobalStyle`
  a:visited {
    color: ${(props) => props.theme.text}
  }
`;

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyleBody />
      <GlobalStyleLink />
      <GlobalStyleLinkVisited />
      {children}
    </ThemeProvider>
  );
};

export default Theme;