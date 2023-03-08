import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '~/styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
