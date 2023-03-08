import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }

  body, input, a, button {
    font-family: 'Poppins', sans-serif;
  }

  button {
    -webkit-tap-highlight-color: transparent;
    border: none;
    background: none;
  }
`;
