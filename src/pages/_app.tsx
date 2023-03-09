import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { AppContainer } from '~/components';

import { GlobalStyle, theme } from '~/styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default MyApp;
