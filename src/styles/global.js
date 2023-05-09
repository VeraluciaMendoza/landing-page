import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Josefin Sans", sans-serif;
    
    /* &:before,
    &:after {
      box-sizing: inherit;
    } */
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: gray;
    background: white;
    font-size: 15px;

    
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    transition: background 0.2s linear;
  }
`;

export default GlobalStyle;
