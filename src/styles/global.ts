import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, a {
    font-family: 'Poppins', sans-serif;
  }

  button {
    border: none;
    background: none;
  }
`;
