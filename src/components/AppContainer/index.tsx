import { Container } from './styles';

export type AppContainerProps = {
  children?: JSX.Element;
};

export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <Container>
      <header>
        <h1>Planner</h1>
      </header>
      {children}
    </Container>
  );
};
