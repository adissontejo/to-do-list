import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${p => p.theme.colors.primary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > main {
    padding: 40px 0 20px;

    width: calc(100% - 20px);
    max-width: 420px;
    background: ${p => p.theme.colors.background};
    border-radius: 10px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    > h1 {
      color: ${p => p.theme.colors.primary};
      font: 400 36px 'Pacifico', cursive;
    }
  }

  > p {
    margin: 40px 0 20px;

    color: ${p => p.theme.colors.background};
    font-size: 1rem;
  }

  > .register {
    padding: 12px 0;

    width: calc(100% - 60px);
    max-width: 380px;
    background: ${p => p.theme.colors.background};
    border-radius: 10px;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);

    color: ${p => p.theme.colors.primary};
    font-size: 1rem;

    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Form = styled.form`
  padding: 0 20px;

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 15px;

  > .submit {
    margin: 20px 0 0;
    padding: 12px 0;

    width: 100%;
    background: ${p => p.theme.colors.primary};
    border-radius: 10px;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);

    color: ${p => p.theme.colors.background};
    font-size: 1rem;

    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
