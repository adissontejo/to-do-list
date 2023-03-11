import App, { AppContext, AppProps } from 'next/app';
import { getCookie } from 'cookies-next';
import { ThemeProvider } from 'styled-components';

import { AppContainer } from '~/components';
import { api, getLoggedUser, UserDataWithLists } from '~/services';
import { GlobalStyle, theme } from '~/styles';

export type GlobalPageProps = {
  user: UserDataWithLists | null;
};

export type Path = '/' | '/lists/[listId]' | '/login' | '/register';

const paths: Path[] = ['/', '/lists/[listId]', '/login', '/register'];
const authPaths: Path[] = ['/login', '/register'];
const userPaths: Path[] = ['/', '/lists/[listId]'];

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const header = userPaths.includes(router.pathname as Path);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer header={header}>
        <Component {...pageProps} />
      </AppContainer>
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  const { req, res } = context.ctx;

  const props = await App.getInitialProps(context);

  if (!paths.includes(context.ctx.pathname as Path)) {
    return props;
  }

  const token = getCookie('auth-token', { req, res });

  try {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const user = await getLoggedUser();

    const redirect = authPaths.includes(context.ctx.pathname as Path);

    if (redirect) {
      res.writeHead(307, { Location: '/' });
      res.end();
    }

    return {
      ...props,
      pageProps: {
        ...props.pageProps,
        user,
      },
    };
  } catch (e) {
    api.defaults.headers.common['Authorization'] = '';

    const redirect = userPaths.includes(context.router.pathname as Path);

    if (redirect) {
      res.writeHead(307, { Location: '/login' });
      res.end();
    }

    return props;
  }
};

export default MyApp;
