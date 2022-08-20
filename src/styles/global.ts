import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html, #__next {
    height: 100%;
  }

  body {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 62.5% !important;

    background-color: #fafafa;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 83.5%;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  } 

  button, a {
    cursor: pointer;
  }

  input, button {
    outline: none;
    border: none;
    font-family: 'Poppins', sans-serif;
  }
`;
 
export default GlobalStyle;