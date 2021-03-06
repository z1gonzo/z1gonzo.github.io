import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Sun, Moon } from "styled-icons/feather";
import { ThemeContext } from "../../contexts/ThemeStore";

const icon = css`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  position: absolute;
  right: 1vw;
  top: 2vh;
`;

const StyledSun = styled(Sun)`
  ${icon}
`;

const StyledMoon = styled(Moon)`
  ${icon}
`;

const ToggleDarkModeButton = () => {
    const { theme, switchTheme } = useContext(ThemeContext);
  
    return (
      <>
        {theme === "dark" ? (
          <StyledSun size={32} onClick={() => switchTheme("light")} />
        ) : (
          <StyledMoon size={32} onClick={() => switchTheme("dark")} />
        )}
      </>
    );
  };
  
  export default ToggleDarkModeButton;